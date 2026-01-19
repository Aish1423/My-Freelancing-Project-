const clientModel = require("./clientModel")
const userModel = require("../user/userModel")
const bcrypt = require("bcrypt")

const add = async (req, res) => {
    let validations = ""

    if (!req.body.companyName) {
        validations += "Company Name is Required"
    }

    if (!req.body.address) {
        validations += "Address is Required"
    }

    if (!req.body.country) {
        validations += "Country is Required"
    }

    if (!req.body.contact) {
        validations += "Contact is Required"
    }

    if (!req.body.email) {
        validations += "Email is Required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            messgae: "Validation Error : " + validations
        })
    }
    else {
        let userTotal = await userModel.countDocuments()
        let userObj = new userModel({
            autoId: userTotal + 1,
            companyName: req.body.companyName,
            address: req.body.address,
            country: req.body.country,
            contact: req.body.contact,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        })

        userObj.save()
            .then(async (savedUser) => {
                let clientTotal = await clientModel.countDocuments()
                let clientObj = new clientModel({
                    autoId: clientTotal + 1,
                    companyName: req.boy.companyName,
                    address: req.body.address,
                    country: req.body.country,
                    contact: req.body.contact,
                    email: req.body.email,
                    userId: savedUser._id
                })

                clientObj.save()
                    .then((savedClient) => {
                        savedUser.clientId = savedClient._id

                        savedUser.save()
                            .then((result) => {
                                res.send({
                                    success: true,
                                    status: 200,
                                    message: "New Account Created for Client",
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
                    })
                    .catch((err) => {
                        res.send({
                            success: false,
                            status: 500,
                            message: err.message
                        })
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
}

const all = (req, res) => {
    clientModel.find(req.body)
        .populate("userId")
        .exec()
        .then((result) => {
            res.send({
                success: true,
                status: 200,
                message: "All Documents Loaded",
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
        validations += "_id is required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            messgae: "Validation Error : " + validations
        })
    }
    else {
        clientModel.findOne({ _id: req.body._id })
            .populate("userId")
            .exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Single document loaded",
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

const update = (req, res) => {
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
        userModel.findOne({ clientId: req.body._id }).exec()
            .then(userData => {
                if (userData == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "User does not exist"
                    })
                }
                else {
                    if (!!req.body.companyName) userData.companyName = req.body.companyName
                    if (!!req.body.email) userData.email = req.body.email
                    //  if(!!req.body.address) userData.address = req.body.address
                    // if(!!req.body.contact) userData.contact = req.body.contact
                    // if(!!req.body.country) userData.country = req.body.country

                    userData.save()
                        .then(updatedUser => {
                            clientModel.findOne({ _id: req.body._id }).exec()
                                .then(clientData => {
                                    if (clientData == null) {
                                        res.send({
                                            success: false,
                                            status: 404,
                                            message: "Client Data not exist"
                                        })
                                    }
                                    else {
                                        if (!!req.body.companyName) clientData.companyName = req.body.companyName
                                        if (!!req.body.email) clientData.email = req.body.email
                                        if (!!req.body.address) clientData.address = req.body.address
                                        if (!!req.body.contact) clientData.contact = req.body.contact
                                        if (!!req.body.country) clientData.country = req.body.country

                                        clientData.save()
                                            .then(updatedClient => {
                                                res.send({
                                                    success: true,
                                                    status: 200,
                                                    message: "Profile Updated",
                                                    data: updatedClient
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

module.exports = { add, all, single, update }