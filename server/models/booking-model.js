const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  tourTitle: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Booking = new model("Booking", bookingSchema);
module.exports = Booking;