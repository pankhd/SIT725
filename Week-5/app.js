
const mongoose = require("mongoose");

// Define the Pizza schema
const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ingredients: { type: [String], required: true },
  price: { type: Number, required: true, min: 0 },
});

// Export the Pizza model
module.exports = mongoose.model("Pizza", pizzaSchema);
const Pizza = require("../models/pizzaModel");

// Display the pizza form
exports.showForm = (req, res) => {
  res.render("form", { title: "Add a New Pizza" });
};

// Handle pizza creation
exports.addPizza = async (req, res) => {
  try {
    const { name, ingredients, price } = req.body;
    const newPizza = new Pizza({ name, ingredients: ingredients.split(","), price });
    await newPizza.save();
    res.redirect("/"); // Redirect to the home page
  } catch (err) {
    console.error("Error adding pizza:", err);
    res.status(500).send("Internal Server Error");
  }
};