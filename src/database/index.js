const mongoose = require("mongoose")
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DATA_URI)
                console.log(`Database connected`)
    } catch (error) {
        console.log(`Database is not connected`)
    }
}
// connectDB()
module.exports = connectDB