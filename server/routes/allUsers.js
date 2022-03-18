const {Router} = require('express');
const router = new Router();
const {signup} = require('../models/signup')
const bcrypt = require('bcrypt')

router.get('/allusers',async (request,response)=>{
    const allUsers = await signup.find().where({
        isAdmin: false
    }).select("username lastBillPaidDate lastBillPaidImage ")
    response.json(allUsers)    
})

router.get('/user/:id',async (request,response)=>{
    const {id} = request.params
    const user = await signup.find({_id:id}).select("username lastBillPaidDate")
    response.json(user)    
})

// router.get('/admin',async(request,response)=>{

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash("ADMIN", salt);

//     const responseData = new signup({
//         username:'ADMIN',
//         password: hashedPassword,
//         isAdmin:true,
//         phoneNumber:1234
//     })
//     responseData.save()

//     response.json('done')
// })

module.exports = router;