const projectModel = require("./projectModel")

const add = async (req, res) => {
    let validations = ""

    if (!req.body.name) {
        validations += "Name is Required"
    }

    if (!req.body.description) {
        validations += "Description is Required"
    }


    if (!req.body.budget) {
        validations += "Budget is Required"
    }

    if (!req.body.technology) {
        validations += "Technology is Required"
    }

    if(!req.body.categoryId) {
        validations += "Category ID is required"
    }

    if(!req.body.clientId) {
        validations += "Client ID is required"
    }

    if(!req.file) {
        validations += "Attachmnent is required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error : " +validations
        })
    }
    else {
        let total = await projectModel.countDocuments()
        let project = new projectModel({
            autoId: total+1,
            name: req.body.name,
            description: req.body.description,
            attachment: req.body.attachment,
            budget: req.body.budget,
            technology: req.body.technology,
            categoryId: req.body.categoryId,
            clientId: req.body.clientId,
            attachmnent : "client/"+req.file.filename
        })
        project.save()
            .then((result) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "New Project Created",
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
    projectModel.find(req.body)
    .populate("categoryId")
    .populate("clientId")
    .exec()
        .then((result) => {
            res.send({
                success: true,
                status: 200,
                message: "All documents Loaded",
                total: result.length,
                data: result
            })
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 500,
                mesaage: err.message
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
        .populate("categoryId")
        .populate("clientId")
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

const update = (req,res)=> {
    let validations = ""
    if(!req.body._id) {
        validations = "_id is required"
    }

    if(!!validations) {
        res.send({
            success : false,
            status : 422,
            message : "Validation Error : "+validations
        })
    }
    else {
        projectModel.findOne({_id:req.body._id}).exec()
        .then((result)=> {
            if(result==null) {
                res.send({
                    success : false,
                    status : 404,
                    message : "Project not found"
                })
            }
            else{
                if(!!req.body.name) result.name = req.body.name
                if(!!req.body.description) result.description = req.body.description
                if(!!req.body.attachment) result.attachmnent = req.body.attachment
                if(!!req.body.budget) result.budget = req.body.budget
                if(!!req.body.technology) result.technology = req.body.technology
                if(!!req.body.categoryId) result.categoryId = req.body.categoryId
                if(!!req.body.clientId) result.clientId = req.body.clientId
                
                result.save()
                .then((updatedData)=> {
                    res.send({
                        success : true,
                        status : 200,
                        message : "Document Updated",
                        data : updatedData
                    })
                })
            }
        })
        .catch((err)=> {
            res.send({
                success : false,
                status : 500,
                message : err.message
            })
        })
    }
}

const deleteFun = (req,res)=> {
    let validations = ""
    if(!req.body._id) {
        validations = "_id is required"
    }

    if(!!validations) {
        res.send({
            success : false,
            status : 422,
            message : "Validation Error : "+validations
        })
    }
    else {
        projectModel.findOne({_id:req.body._id}).exec()
        .then((result)=> {
            if(result==null) {
                res.send({
                    success : false,
                    status : 404,
                    message : "Project not found"
                })
            }
            else{
                result.status = false

                result.save()
                .then((updatedData)=> {
                    res.send({
                        success : true,
                        status : 200,
                        message : "Document Updated",
                        data : updatedData
                    })
                })
            }
        })
        .catch((err)=> {
            res.send({
                success : false,
                status : 500,
                message : err.message
            })
        })
    }
}

module.exports = { add, all, update, deleteFun, single }