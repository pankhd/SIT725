
const pizzas = [
    { name: "Margherita", ingredients: ["tomato", "mozzarella", "basil"], price: 8.99 },
    { name: "Pepperoni", ingredients: ["tomato", "mozzarella", "pepperoni"], price: 9.99 },
    { name: "Veggie Supreme", ingredients: ["tomato", "bell peppers", "onion", "olives"], price: 10.49 },
    { name: "Hawaiian", ingredients:["ham", "pineapple", "cheese"], price: 11.40}
    ]



// mongoose schema definition for pizza objects
const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
        trim: true 
    },
    ingredients: {
        type: [String], 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
        min: 0
    }
})