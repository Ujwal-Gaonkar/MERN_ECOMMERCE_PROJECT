const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")('sk_test_51L2LbsSBRlj0LsFzz3nZaY8j1No9OFN6ToXkTwdyG5wK2UYhoPRJMhTCG9tgocHcqtFiSB2rud3bdfq9miRUMvzh00VOQWORJ9');

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "JUSTBuy",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});