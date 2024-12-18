const express = require("express");
const mongoose = require("mongoose");
const pizzaController = require("./controller/pizzaController");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", pizzaController.showForm);
app.post("/add-pizza", pizzaController.addPizza);
app.get("/all-pizzas", pizzaController.getAllPizzas);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export app for testing
