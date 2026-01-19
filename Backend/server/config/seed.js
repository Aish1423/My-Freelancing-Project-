const userModel = require("../API/user/userModel")
const bcrypt = require("bcrypt")

userModel.findOne({ email: "admin@gmail.com" }).exec()
    .then((adminData) => {
        if (adminData == null) {
            let admin = new userModel({
                autoId: 1,
                name: "Admin",
                email: "admin@gmail.com",
                password: bcrypt.hashSync("123", 10),
                userType: 1
            })

            admin.save()
                .then(() => {
                    console.log("Admin Created")
                })
                .catch((err) => {
                    console.log("Error in adding admin", err)
                })
        }
        else {
            console.log("Admin Already exists")
        }
    })
    .catch(err => {
        console.log("Error in finding admin", err)
    })