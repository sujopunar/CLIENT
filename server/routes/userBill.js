const { Router } = require('express')
const router = new Router()
const { signup } = require('../models/signup')

router.post('/userbill', async (request, response) => {
    const { userId, billImage } = request.body;

    signup.findByIdAndUpdate(userId, { lastBillPaidImage: billImage, requestForApproval: 'pending', requestForApprovalDate: new Date().toISOString() },
        function (error, docs) {
            if (error) {
                console.log(error)
            }
            else {
                response.json({ status: 'pending' })
            }
        });

})

router.post('/userbill/approval', async(request, response) => {
    const { userId, approved } = request.body;
    const userData = await signup.find({ _id: userId });
    if (approved) {
        signup.findByIdAndUpdate(userId, { lastBillPaidDate: userData[0].requestForApprovalDate, requestForApproval: 'accepted' },
            function (error, docs) {
                if (error) {
                    console.log(error)
                }
                else {
                    response.json({ status: 'accepted' })
                }
            });

    } else {
        signup.findByIdAndUpdate(userId, { requestForApproval: 'rejected' },
            function (error, docs) {
                if (error) {
                    console.log(error)
                }
                else {
                    response.json({ status: 'rejected' })
                }
            });
    }

})


module.exports = router