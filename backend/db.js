const mongoose = require('mongoose');

const mongoURI = process.env.MONGOURI;
// const mongoURI = "mongodb+srv://fgrreloaded:f@g#r$14@bevegan.f4yxvfn.mongodb.net/inote?retryWrites=true&w=majority";


const connectToMongo =  ()=>{
     mongoose.connect( mongoURI, ()=>{
        console.log("Database Connected Successfully")
    })
}
module.exports = connectToMongo;

