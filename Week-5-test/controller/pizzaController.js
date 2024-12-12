// **pizzaController.js** - Controller for pizza operations
const path = require("path");
const Pizza = require("../models/pizzaModel");

// Serve the HTML form for adding pizzas
exports.showForm = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/form.html"));
};

// Add a new pizza to the database
exports.addPizza = async (req, res) => {
  try {
    const { name, ingredients, price } = req.body;

    // Validate required fields
    if (!name || !ingredients || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new pizza document
    const pizza = new Pizza({
      name,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      price: parseFloat(price),
    });

    // Save the pizza to the database
    const savedPizza = await pizza.save();
    res.status(201).json({ message: "Pizza added successfully!", pizza: savedPizza });
  } catch (err) {
    console.error("Error saving pizza:", err);
    res.status(500).json({ error: "Failed to add pizza" });
  }
};

// Retrieve all pizzas from the database
exports.getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json({ pizzas });
  } catch (err) {
    console.error("Error retrieving pizzas:", err);
    res.status(500).json({ error: "Failed to retrieve pizzas" });
  }
};
  
