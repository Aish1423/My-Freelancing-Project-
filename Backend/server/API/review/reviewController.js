const reviewModel = require("./reviewModel")

const add = async (req, res) => {
    let validations = ""

    if (!req.body.review) {
        validations += "Review is Required"
    }

    if(!req.body.bidderId) {
        validations += "Bidder ID is required"
    }

    if(!req.body.projectId) {
        validations += "Project ID is required"
    }

    if(!req.body.companyId) {
        validations += "Company ID is required"
    }

    if (!!validations) {
        res.send({
            success: false,
            status: 422,
            messgae: "Validation Error :" + validations
        })
    }
    else {
        let total = await reviewModel.countDocuments()
        let review = new bdeModel({
            autoId: total + 1,
            review: req.body.review,
            bidderId: req.body.bidderId,
            projectId: req.body.projectId,
            companyId: req.body.companyId
        })
        review.save()
            .then((result) => {
                res.send({
                    success: true,
                    status: 200,
                    messgae: "New Review Created",
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
    reviewModel.find(req.body)
    .populate("bidderId")
    .populate("projectId")
    .populate("companyId")
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
        reviewModel.findOne({_id:req.body._id}).exec()
        .then((result)=> {
            if(result==null) {
                res.send({
                    success : false,
                    status : 404,
                    message : "Review not found"
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

module.exports = { add, all, deleteFun }