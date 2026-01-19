const jwt = require('jsonwebtoken')
const SECRET = 'hb11#%^&*&T^&^%HBhej'


const check = (req, res, next)=>{
	let token = req.headers['authorization']
	if (!!token) {
		jwt.verify(token, SECRET, (err, data)=>{
			if(err){
				res.send({
					sucess: false,
					status:403,
					message:"Forbidden Error, Token Incorrect"
				})
			}
			else{
				req.decoded = data
				next()
			}
		})
	}  
	else {
		res.send({
			sucess: false,
			status:404,
			message:"No Token found"
		})
	}
}

module.exports = check

