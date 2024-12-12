// **app.js** - Main entry point
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const pizzaController = require("./controller/pizzaController");

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/pizzaDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Define routes
app.get("/", pizzaController.showForm);
app.post("/add-pizza", pizzaController.addPizza);
app.get("/all-pizzas", pizzaController.getAllPizzas); // Route for retrieving all pizzas


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
