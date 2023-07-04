const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT || 1000

app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
}) 
app.use(express.json())
// Available Routes
app.use("/",(req,res)=>{
  res.send({success:true})
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port,()=>{
    console.log("Connection Success");
})
