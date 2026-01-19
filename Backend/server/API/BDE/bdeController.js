const bdeModel = require("./bdeModel")
const userModel = require("../user/userModel")
const bcrypt = require("bcrypt")

const add = async (req, res) => {
    let validations = ""

    if (!req.body.name) {
        validations += "Name is Required"
    }

    if (!req.body.email) {
        validations += "Email is Required"
    }

    if (!req.body.contact) {
        validations += "Contact is Required"
    }

    if (!req.body.password) {
        validations += "Password is required"
    }

    if (!req.body.preferenceId) {
        validations += "Preference ID is required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            messgae: "Validation Error :" + validations
        })
    }
    else {

        let prevUser = await userModel.findOne({ email: req.body.email })

        if (!!prevUser)
            res.send({
                success: false,
                status: 409,
                message: "User Already exists with same email address"
            })

        else {
            let userTotal = await userModel.countDocuments()
            let userObj = new userModel({
                autoId: userTotal + 1,
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            })

            userObj.save()
                .then(async (savedUser) => {
                    let bdeTotal = await bdeModel.countDocuments()
                    let bdeObj = new bdeModel({
                        autoId: bdeTotal + 1,
                        name: req.body.name,
                        email: req.body.email,
                        contact: req.body.contact,
                        preferenceId: req.body.preferenceId,
                        userId: savedUser._id
                    })

                    bdeObj.save()
                        .then((savedBde) => {
                            savedUser.bidderId = savedBde._id

                            savedUser.save()
                                .then((result) => {
                                    res.send({
                                        success: true,
                                        status: 200,
                                        message: "New Account Created for BDE",
                                        data: result
                                    })
                                })
                                .catch((err) => {
                                    console.log(err)
                                    res.send({
                                        success: false,
                                        status: 500,
                                        message: err.message
                                    })
                                })
                        })
                        .catch((err) => {
                            console.log(err)
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message
                            })
                        })
                })
                .catch((err) => {
                    console.log(err)
                    res.send({
                        success: false,
                        status: 500,
                        message: err.message
                    })
                })
        }
    }
}

const all = (req, res) => {
    let startpoint = 0
    if (!!req.body.startpoint) {
        startpoint = req.body.startpoint
        delete req.body.startpoint
    }
    req.body.status = true
    bdeModel.find(req.body)
        .sort({ createdAt: 1 })
        .skip(startpoint)
        .limit(2)
        .populate("preferenceId")
        // .populate("userId")
        .exec()
        .then((result) => {
            res.send({
                success: true,
                status: 200,
                message: "All documents added",
                total: result.length,
                data: result
            })
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
}

const single = (req, res) => {
    let validations = ""
    if (!req.body._id) {
        validations += "_id is Required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error : " + validations
        })
    }
    else {
        bdeModel.findOne({ _id: req.body._id })
            .populate("preferenceId")
            .populate("userId")
            .exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "BDE does not exist"
                    })
                }
                else {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Single Document Loaded",
                        data: result
                    })
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

const update = async(req, res) => {
    let validations = ""
    if (!req.body._id) {
        validations = "_id is required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error : " + validations
        })
    }
    else {

        let prevUser = await userModel.findOne({ email: req.body.email })

        if (!!prevUser)
            res.send({
                success: false,
                status: 409,
                message: "User Already exists with same email address"
            })

        else{

        userModel.findOne({ _id: req.body._id }).exec()
            .then(userData => {
                if (userData == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "User does not exist"
                    })
                }
                else {
                    if (!!req.body.name) userData.name = req.body.name
                    if (!!req.body.email) userData.email = req.body.email

                    userData.save()
                        .then(updatedUser => {
                            bdeModel.findOne({ _id: req.body._id }).exec()
                                .then(bdeData => {
                                    if (bdeData == null) {
                                        res.send({
                                            success: false,
                                            status: 404,
                                            message: "BDE Data not Exist"
                                        })
                                    }
                                    else {
                                        if (!!req.body.name) bdeData.name = req.body.name
                                        if (!!req.body.email) bdeData.email = req.body.email
                                        if (!!req.body.contact) bdeData.contact = req.body.contact
                                        if (!!req.body.preferenceId) bdeData.preferenceId = req.body.preferenceId

                                        bdeData.save()
                                            .then(updatedBde => {
                                                res.send({
                                                    success: true,
                                                    status: 200,
                                                    message: "Profile Updated",
                                                    data: updatedBde
                                                })
                                            })
                                            .catch(err => {
                                                res.send({
                                                    success: false,
                                                    status: 500,
                                                    message: err.message
                                                })
                                            })
                                    }
                                })
                                .catch(err => {
                                    res.send({
                                        success: false,
                                        status: 500,
                                        message: err.message
                                    })
                                })
                        })
                        .catch(err => {
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message
                            })
                        })
                }
            })
            .catch(err => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
        }
    }
}

const changeStatus = (req, res) => {
    let validations = ""

    if (!req.body._id) {
        validations += "_id is required"
    }

    if (!req.body.status) {
        validations += "Status is Required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error : " + validations
        })
    }

    else {
        userModel.findOne({ bdeId: req.body._id }).exec()
            .then(userData => {
                if (userData == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "User Does Not Exist"
                    })
                }
                else {
                    userData.status = req.body.status

                    userData.save()
                        .then(updatedUser => {
                            bdeModel.findOne({ _id: req.body._id }).exec()
                                .then(bdeData => {
                                    if (bdeData == null) {
                                        res.send({
                                            success: false,
                                            status: 404,
                                            message: "BDE Data Not Exist"
                                        })
                                    }
                                    else {
                                        bdeData.status = req.body.status

                                        bdeData.save()
                                            .then(updatedBde => {
                                                res.send({
                                                    success: true,
                                                    status: 200,
                                                    message: "Status Changed",
                                                    data: updatedBde
                                                })
                                            })
                                            .catch(err => {
                                                res.send({
                                                    success: false,
                                                    status: 500,
                                                    message: err.message
                                                })
                                            })
                                    }
                                })
                                .catch(err => {
                                    res.send({
                                        success: false,
                                        status: 500,
                                        message: err.message
                                    })
                                })
                        })
                        .catch(err => {
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message
                            })
                        })
                }
            })
            .catch(err => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

module.exports = { add, single, update, all, changeStatus }