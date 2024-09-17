const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Booking = require("../models/booking-model");

const checkoutController = async (req, res) => {
  const { tour, selectedHotel } = req.body;

  const totalPrice =
    tour.afterDiscount + (selectedHotel ? selectedHotel.price : 0);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: `Booking for ${tour.tilte}`,
              description: `Location: ${tour.location}, Hotel: ${
                selectedHotel?.name || "None"
              }`,
            },
            unit_amount: totalPrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.SUCCESS_URI}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CANCEL_URI}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe error: ", error);
    res.status(500).json({ error: error.message });
  }

  console.log("Tour:", tour);
  console.log("Selected Hotel:", selectedHotel);
  console.log("Total Price:", totalPrice);
};

const getRecipetController = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    });
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve session' });
  }
};

const postDataDb = async (req, res) => {
  try {
    const response = req.body;
    await Booking.create(response);
    return res.status(200).json({ message: "Data Stored Succesfully" });
  } catch (error) {
    return res.status(500).json({ message: "Data Not Stored Succesfully" });
  }
}


module.exports = { checkoutController, getRecipetController, postDataDb };
