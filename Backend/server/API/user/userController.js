const userModel = require("./userModel")
const bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

const SECRET = 'hb11#%^&*&T^&^%HBhej'


const login = (req, res)=>{
    let validation = ""
    console.log(req.body.password)

    if (!req.body.email){
        validation += "email is required"
    }
    if (!req.body.password){
        validation += "password is required"
    }
    if(!!validation){
        res.send({
            success: false,
            status: 422,
            message: "validation Error : " + validation
        })
    }
    else{
        userModel.findOne({email:req.body.email}).exec()
        .then((userData)=>{
            console.log(userData)
            if(userData==null){
                res.send({
                    success:false,
                    status:404,
                    message:"User does not exist"
                })
            } 
            else{
                if(bcrypt.compareSync(req.body.password, userData.password)){
                    if(userData.status){
                        let payload ={
                            _id:userData._id,
                            email:userData.email,
                            name:userData.name,
                            userType:userData.userType
                        }
                        let token = jwt.sign(payload, SECRET, {expiresIn:'5h'} )
                        res.send({
                            success:true,
                            status:200,
                            message:"Login Successfull",
                            data:userData,
                            token:token
                        })
                    }
                    else{
                        res.send({
                            success:false,
                            status:403,
                            message:"Inactive Account, Contact Admin"
                        })
                    }
                }
                else{
                    res.send({
                        success:false,
                        status:403,
                        message:"Invalid Credentials"
                    })
                }
            }
        })
        .catch(err=>{
            res.send({
                success:false,
                status:500,
                message:err.message
            })
        })
    }

}

const changePassword = (req, res)=>{
    let validation = ""

    if(!req.body._id){
        validation = "_id is required"
    }
    if(!req.body.oldPassword){
        validation = "oldPassword is required"
    }
    if(!req.body.newPassword){
        validation = "newPassword is required"
    }
    if(!!validation){
        res.send({
            success: false,
            status: 422,
            message: "validation Error :" + validation
        })
    }
    else{
        userModel.findOne({_id:req.body._id}).exec()
        .then((userData)=>{
            if(userData==null){
                res.send({
                    success:false,
                    status:404,
                    message:"User does not exist"
                })
            }
            else{
                if(bcrypt.compareSync(req.body.oldPassword, userData.password)){
                    userData.password = bcrypt.hashSync(req.body.newPassword, 10)

                    userData.save()
                    .then(result=>{
                        res.send({
                        success: true,
                        status: 200, message: "Password Updated", data:result
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
            else{
                res.send({success:false,status:403, message:"Old Password does not match"})
            }
          }
        })
        .catch(err => {
            res.send({
                success: false,
                status: 500, message: err.message
            })
        })
    }
}

module.exports = { login, changePassword }