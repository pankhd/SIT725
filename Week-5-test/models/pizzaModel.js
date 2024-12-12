const mongoose = require("mongoose");

// Define the Pizza schema
const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ingredients: { type: [String], required: true },
  price: { type: Number, required: true, min: 0 },
});

// Export the Pizza model
module.exports = mongoose.model("Pizza", pizzaSchema);