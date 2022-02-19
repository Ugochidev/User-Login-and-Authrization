// // const express = require("express");
// // const mongoose = require("mongoose");
// // const app = express();
// // const sampleRoute = require('./router/sample.route')
// // const userRoute = require('./router/user.route');
// // const accessRoute = require('./router/access.route')
// const env = require("dotenv");
// env.config();
// // const bodyParser = require("body-parser")

// const PORT = process.env.PORT;
// // app.use(bodyParser.urlencoded({extended: true}));
// // app.use(bodyParser.json());
// // app.use(express.json());

// const connectDB = async ()=>{
//     try {
//         await mongoose.connect(process.env.DATA_URI)
//                 console.log(`Database connected`)
//     } catch (error) {
//         console.log(`Database is not connected`)
//     }
// }

// module.exports = connectDB;
// // connectDB()

// // app.use('/api/v1',accessRoute)
// // app.use('/api/v1',sampleRoute)
// // app.use('/api/v1',userRoute)

// // app.listen(PORT, ()=>{
// // console.log(`App is now listening to port ${PORT}`);
// // })