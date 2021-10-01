const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inoteapps"
// const mongoURI = "mongodb+srv://fgrreloaded:nitishsingh14@nodedb.nd4t9.mongodb.net/inotebook?retryWrites=true&w=majority"

const connectToMongo =  ()=>{
     mongoose.connect(mongoURI, ()=>{
        console.log("Hello Fgr Your Database is successfully connected to MongoDb");
    })
}
module.exports = connectToMongo;

