const mongoose = require('mongoose');
// const mongoURI = "http://localhost:27017/inoteapps"
const mongoURI = "mongodb://localhost:27017/inoteapps"

const connectToMongo =  ()=>{
     mongoose.connect(mongoURI, ()=>{
        console.log("Hello Fgr Your Database is successfully connected to MongoDb");
    })
}
module.exports = connectToMongo;