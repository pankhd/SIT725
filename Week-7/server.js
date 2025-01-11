const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const pizzaController = require("./controller/pizzaController");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/pizzaDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
app.get("/", pizzaController.showForm);
app.post("/add-pizza", pizzaController.addPizza);
app.get("/all-pizzas", pizzaController.getAllPizzas);

app.get('/test', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.json({ randomNumber });
});

// Create an HTTP server
const http = require("http").createServer(app);

// Initialize Socket.IO
const io = require("socket.io")(http);

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("Socket connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);


    socket.on("requestNumber", () => {
      const randomNumber = parseInt(Math.random() * 10);
      socket.emit("number", randomNumber);
    });
  
    socket.on("number", (msg) => {
      console.log(`Received random number from server: ${msg}`);
    });
  });
  

// Start the server
http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});