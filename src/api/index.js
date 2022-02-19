const express = require("express");
const Router = express.Router();

const registerApi = require("./register");
const loginApi = require("./login");
const paymentApi = require("./payment");

Router.use(registerApi)
Router.use(loginApi);
Router.use(paymentApi);

module.exports = Router;