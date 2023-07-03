const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://fgrreloaded:f@g#r$14@nodedb.nd4t9.mongodb.net/inotebook?retryWrites=true&w=majority";
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


const connectToMongo =  ()=>{
     mongoose.connect( mongoURI, ()=>{
        console.log("Database Connected Successfully")
    })
}
module.exports = connectToMongo;

