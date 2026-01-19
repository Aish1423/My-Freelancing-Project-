const categoryModel = require("./categroryModel")

const add = async (req, res) => {
    let validations = ""

    if (!req.body.name) {
        validations += "Name is Required"
    }

    if(!req.file) {
        validations += "Thumbnail is Required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error : " + validations
        })
    }

    else {
        let total = await categoryModel.countDocuments()
        let category = new categoryModel({
            autoId: total + 1,
            name: req.body.name,
            thumbnail : "category/"+req.file.filename
        })
        category.save()
            .then((result) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "New Category Created",
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
}

const all = (req, res) => {
    req.body.status = true
    categoryModel.find(req.body).exec()
        .then((result) => {
            res.send({
                success: true,
                status: 200,
                message: "All Documents Loaded",
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
            message: "Validation Error : " + validations
        })
    }
    else {
        categoryModel.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Category does not exist"
                    })
                }
                else {
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
        categoryModel.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Category not found"
                    })
                }
                else {
                    if (!!req.body.name) result.name = req.body.name

                    result.save()
                        .then((updatedData) => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Document Updated",
                                data: updatedData
                            })
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

const deleteFun = (req, res) => {
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
        categoryModel.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Category not found"
                    })
                }
                else {
                    result.status = false

                    result.save()
                        .then((updatedData) => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Document Updated",
                                data: updatedData
                            })
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

module.exports = { add, all, single, update, deleteFun }