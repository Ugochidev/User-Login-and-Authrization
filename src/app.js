const express = require("express")
const morgan = require("morgan")
const helmet = require('helmet');
const cors = require('cors');
require("dotenv").config();
require("./auth/passport");


require("./model/users");

const middlewares = require("./middlewares");
const api = require("./api");
const morgan = require('morgan');

const app = express.json();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({
        message: "You are on the rigth path!!!"
    })
})

app.use("/api/v1", api);

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)