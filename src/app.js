const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("./database/index")
require("./auth/passport");
const connectDB = require("./database/index")
require("./models/user");
const middlewares = require("./middlewares");
const api = require("./api");
const PORT = process.env.PORT;

app.use(express.json());

connectDB()
app.use("/api/v1", api);

app.listen(PORT, ()=>{
console.log(`App is now listening to port ${PORT}`);
})