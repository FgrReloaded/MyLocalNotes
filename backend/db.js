// Connect to MongoDB

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = dbConnect;
