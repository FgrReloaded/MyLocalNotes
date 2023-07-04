const dbConnect = require('./db');
const express = require('express');
const cors = require('cors')

dbConnect();
const app = express()
const port = process.env.PORT || 1000

app.use(cors({
    origin: "*"
}))
app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port,()=>{
    console.log("Connection Success");
})
