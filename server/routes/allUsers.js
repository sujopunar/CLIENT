const {Router} = require('express');
const router = new Router();
const {signup} = require('../models/signup')

router.get('/allusers',async (request,response)=>{
    const allUsers = await signup.find().where({
        isAdmin: false
    }).select("firstName lastName email phone street _Id lastBillPaidImage profile lastBillPaidDate")
    response.json(allUsers)    
})

router.get('/user/:id',async (request,response)=>{
    const {id} = request.params
    const user = await signup.find({_id:id}).select("username lastBillPaidDate")
    response.json(user)    
})

router.post('/users',async(request,response)=>{
    const { firstName } = request.body;
    const allSearchUsers = await signup.find({$or:[{firstName:{$regex: firstName}},{lastName:{$regex: firstName}},{email:{$regex: firstName}}]});
    response.json({allSearchUsers})
})


module.exports = router;