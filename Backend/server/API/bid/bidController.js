const bidModel = require("./bidModel")

const add = async (req, res) => {
    let validations = ""
    if (!req.body.duration) {
        validations += "Duration is Required"
    }

    if (!req.body.clientId) {
        validations += "Client ID is Required"
    }

    if (!req.body.projectId) {
        validations += "Project ID is required"
    }

    if (!req.body.bdeId) {
        validations += "BDE ID is required"
    }

    if (!req.file) {
        validations += "POC is Required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error : " + validations
        })
    }
    else {
        let total = await bidModel.countDocuments()
        let bid = new bidModel({
            autoId: total + 1,
            duration: req.body.duration,
            clientId: req.body.clientId,
            projectId: req.body.projectId,
            bdeId: req.body.bdeId,
            poc: "bid/" + req.file.filename
        })
        bid.save()
            .then((result) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "New Bid Created",
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
    bidModel.find(req.body)
        .populate("clientId")
        .populate("projectId")
        .populate("bdeId")
        .exec()
        .then((result) => {
            res.send({
                success: true,
                status: 200,
                message: "All Documents Loaded",
                total: result.length,
                dats: result
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
        bidModel.findOne({ _id: req.body._id })
            .populate("clientId")
            .populate("projectId")
            .populate("bdeId")
            .exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Bid does not exist"
                    })
                }
                else {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Single Document added",
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
        bidModel.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Bid not found"
                    })
                }
                else {
                    if (!!req.body.duration) result.duration = req.body.durationd
                    if (!!req.file) result.poc = "bid/" + req.file.filename

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
const updateStatus = (req, res) => {
    let validations = ""
    if (!req.body._id) {
        validations = "_id is required"
    }
    if (!req.body.status) {
        validations = "status is required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error : " + validations
        })
    }
    else {
        bidModel.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Bid not found"
                    })
                }
                else {
                    if (req.body.status == "Approved") {
                        result.status = "Approved"
                        result.save()
                            .then((updatedData) => {
                                bidModel.find({
                                    $and: [
                                        { projectId: result.projectId },
                                        { _id: { $ne: result._id } }
                                    ]
                                }).exec()
                                    .then(async (bidsData) => {
                                        if (bidsData.length > 0)
                                            for (let x of bidsData) {
                                                x.status = "Declined"
                                                await x.save()
                                            }
                                        res.send({
                                            success: true,
                                            status: 200,
                                            message: "Bid Approved",
                                            data: updatedData
                                        })

                                    })
                            })
                    }
                    else if (req.body.status == "Declined") {
                        result.status = "Declined"
                        result.save()
                            .then((updatedData) => {
                                res.send({
                                    success: true,
                                    status: 200,
                                    message: "Bid Declined",
                                    data: updatedData
                                })
                            })
                    }
                    else {
                        res.send({
                            success: false,
                            status: 400,
                            message: "Invalid Status"
                        })
                    }


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


module.exports = { add, all, single, update }