const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
const Routes = require('./routes')
const mongoose = require('mongoose')
const billRoutes = require('./routes/userBill')
const allUsers = require('./routes/allUsers');

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json({limit: '50mb'}))

const url = "mongodb+srv://Access_db:12345@cluster0.o0o0t.mongodb.net/Security_Guard_Website?retryWrites=true&w=majority"

mongoose.connect(url
,()=>{
    console.log('connected to db')
})

app.use('/',Routes)
app.use('/',billRoutes)
app.use('/',allUsers)

app.get('/',(request,response)=>{
    response.send('this is working')
})


app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`)
})