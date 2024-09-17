const express = require("express");
const router = express.Router();
const checkout = require("../controllers/payment-controller");

router.route('/create-checkout-session').post(checkout.checkoutController);

router.route('/session/:sessionId').get(checkout.getRecipetController);

router.route('/bookingData').post(checkout.postDataDb);

module.exports = router;