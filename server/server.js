const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
const Routes = require('./routes')
const mongoose = require('mongoose')

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())

const url = "mongodb+srv://Access_db:12345@cluster0.o0o0t.mongodb.net/Security_Guard_Website?retryWrites=true&w=majority"

mongoose.connect(url
,()=>{
    console.log('connected to db')
})

app.use('/',Routes)



app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`)
})