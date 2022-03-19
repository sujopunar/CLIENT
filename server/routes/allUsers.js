const {Router} = require('express');
const router = new Router();
const {signup} = require('../models/signup')

router.get('/allusers',async (request,response)=>{
    const allUsers = await signup.find().where({
        isAdmin: false
    }).select("firstName lastName email phone street _Id lastBillPaidImage lastBillPaidDate")
    response.json(allUsers)    
})

router.get('/user/:id',async (request,response)=>{
    const {id} = request.params
    const user = await signup.find({_id:id}).select("username lastBillPaidDate")
    response.json(user)    
})


module.exports = router;