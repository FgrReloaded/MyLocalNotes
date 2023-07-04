const mongoose = require('mongoose');

const mongoURI = process.env.MONGOURI;
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


const connectToMongo =  ()=>{
     mongoose.connect( mongoURI, ()=>{
        console.log("Database Connected Successfully")
    })
}
module.exports = connectToMongo;

