# Pizza application
This application allows you to add a pizza to the database and get all pizza records from within the database


## Dependencies
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^4.21.2",
    "mongodb": "6.11",
    "mongoose": "^8.8.4"
  }

- [Node.js](https://nodejs.org/) installed 
- [MongoDB](https://www.mongodb.com/) installed and running 


## Run the applicationm
run mongod
run node app.js - open browser on http://localhost:3000


## Pizza API endpoints
Add a new pizza to the database:
-Fill in all required fields of form
-Click "Add pizza" 
-Verify successful post request- http://localhost:3000/add-pizza

Get all pizza records from the database:
-Click "Get all pizzas" to view all pizza entries stored in the database -http://localhost:3000/all-pizzas