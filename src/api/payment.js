const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/payment", passport.authenticate("jwt", {session: false}), (req, res)=>{
    res.send("You are total of : #2500")
})

module.exports = {router}