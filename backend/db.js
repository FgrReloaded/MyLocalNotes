const mongoose = require('mongoose');
// require.config({path: './config.env'});
require('dotenv').config({path: './config.env'});
const mongoURI = process.env.DATABASE;
// const mongoURI = "mongodb+srv://fgrreloaded:nitishsingh14@nodedb.nd4t9.mongodb.net/inotebook?retryWrites=true&w=majority"
// const mongoURI = "mongodb+srv://fgrreloaded:nitishsingh14<@nodedb.nd4t9.mongodb.net/inotebook"
// const mongoURI = "mongodb://uuikn7omycbo6d9txlt7:LlHU2KXYObs9NsnanYOt@b4ki8stwdbvgz9a-mongodb.services.clever-cloud.com:27017/b4ki8stwdbvgz9a"
const connectToMongo =  ()=>{
     mongoose.connect( mongoURI, ()=>{
        console.log("Hello Fgr Your Database is successfully connected to MongoDb");
    })
}
module.exports = connectToMongo;

