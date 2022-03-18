const { Router } = require("express");
const router = new Router();
const { signup } = require("../models/signup");

router.post("/userbill", (request, response) => {
  const { userId, billImage, lastBillPaidDate } = request.body;
  //whenever a document is saved in MongoDB there is a unique userID, this is fetched from app.js same file
  console.log("here", userId);
  signup.findByIdAndUpdate(
    //this is a mongoose built in function
    userId, // these are the fields to update
    { lastBillPaidImage: billImage, lastBillPaidDate: lastBillPaidDate },
    function (error, docs) {
      if (error) {
        console.log(error);
      } else {
        response.json({ status: "success", billPaid: true });
      }
    }
  );
});

module.exports = router;
