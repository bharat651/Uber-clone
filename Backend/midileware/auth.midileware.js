const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports.authUser = async function(req, res, next){
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decode._id)
        // console.log(user)
        req.user = user
        return next()
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }


}