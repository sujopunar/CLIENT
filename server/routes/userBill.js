const { Router } = require('express')
const router = new Router()
const { signup } = require('../models/signup')

router.post('/userbill', (request, response) => {
        const { userId, billImage } = request.body;

        console.log('here',userId)
    signup.findByIdAndUpdate(userId, { lastBillPaidImage: billImage,lastBillPaidDate:new Date(), },
        function (error, docs) {
            if (error) {
                console.log(error)
            }
            else {
                response.json({status:'success',billPaid:true})
            }
        });

})


module.exports = router