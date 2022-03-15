const {Router } = require('express');
const router = new Router();
const User = require('../models/signup');
const bcrypt = require('bcrypt');

router.post('/signup',async (request,response)=>{
    const {username,password} = request.body;

    const emailExists = await User.findOne({username});
    if(emailExists){
        return response.status(404).json('email already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = new User({username,password:hashedPassword});
    try{
        const newUser = await user.save();
        response.status(200).json(newUser);
    }catch(error){
        console.log(error.message)
        response.status(500).json(error.message)
    }

})


router.post('/login',async(request,response)=>{
    const {username,password} = request.body;
    const user = await User.findOne({username});
    if(!user){
        return response.status(404).json('email not found')
    }

    console.log(request.body)
    const isMatch = await bcrypt.compare(password,user.password);
    console.log(isMatch)
    if(!isMatch){
        return response.status(404).json('password incorrect')
    }

    response.status(200).json(user);
})



module.exports = router