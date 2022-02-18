const express = require("express");
const User = require("../models/user")
const router = express.Router();

router.post("/register", (req, res)=>{

const { fullName, email, password } = req.body;
const alreadyExistEmail = await User.findOne({where: {email}}).catch((err)=>{
console.log(err.message);
}
)

if(alreadyExistEmail){
return res.json({
    message: `Email exists`
})
}
    const newUser = new User({fullName, email, password});
await newUser.save().catch((err)=>{
console.log(err);
res.json({
message: "Cannot register User atm"
})

});
return res.json({
    message: "Thanks for registering"
})

})

module.exports = {router};  