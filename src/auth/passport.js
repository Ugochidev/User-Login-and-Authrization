 const passport = require("passport");
 const passportJwt = require("passport-jwt");
const User = require("../models/user");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
require("dotenv").config()

passport.use(new StrategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_TOKEN
}, function (jwtPayload, done) {
    return User.findOne({where: {id: jwtPayload.id }}).then((user)=>{
return done (null, user);
    }).catch((err)=>{
    return done(err);
    })
}
)
);
