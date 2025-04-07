const mongoose =require("require")
require("dotenv").config()
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongo_url)
    }
    catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports =connectDB;