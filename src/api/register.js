const express = require("express");
const User = require("../models/user")
const router = express.Router();

router.post("/register", async (req, res)=>{

const { fullName, email, password } = req.body;
const alreadyExistEmail = await User.findOne({email}).catch((err)=>{
console.log(err.message);
}
)
console.log(alreadyExistEmail)

if(alreadyExistEmail){
return res.json({
    message: `Email exists`
})
}

const newUser = new User({fullName, email, password});
await newUser.save().catch((err)=>{
console.log(err);
res.json({
message: "Cannot register Users at the moment. Please try again later."
})

});
console.log(newUser)
return res.json({
    message: `Hi ${fullName}, Thanks for registering`
})

})

module.exports = router;