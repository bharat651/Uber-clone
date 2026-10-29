const userModel = require("../models/user.model")

module.exports.createUser = async({
    firstName,lastName,email,password
}) =>{
    // console.log(firstName)
    if(!firstName || !email || !password){
        console.log('hii')
        throw new Error("All field are required");
    }
    const user = await userModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,
        password
    })
    return user;
    // console.log("Hello")
}
