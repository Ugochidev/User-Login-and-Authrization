const express = require("express");
const User = require("../models/user")
// const registerApi = require("./register");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async ( req, res)=>{

    
const { email, password } = req.body;

const userWithEmail = await User.findOne({email}).catch((err)=>{
console.log(err.message);
}
)

if(!userWithEmail){
return res.json({
    message: `Email does not exist`
})
}

console.log(userWithEmail.password);
console.log(password);
if(userWithEmail.password !== password){
    return res.json({
        message: `password does not match`
    })
    }

const jwtoken = jwt.sign({ id: userWithEmail.id, email: userWithEmail.email}, process.env.JWT_TOKEN)
res.json({
    message: `Hi ${userWithEmail.fullName.toUpperCase()}, Welcome Back`,
    jwtoken
})
})

module.exports = router