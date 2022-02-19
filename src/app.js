const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("./database/index")
require("./auth/passport");

require("./models/user");
const middlewares = require("./middlewares");
const api = require("./api");
const PORT = process.env.PORT;

app.use(express.json());

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DATA_URI)
                console.log(`Database connected`)
    } catch (error) {
        console.log(`Database is not connected`)
    }
}
connectDB()

app.use("/api/v1", api);

app.listen(PORT, ()=>{
console.log(`App is now listening to port ${PORT}`);
})