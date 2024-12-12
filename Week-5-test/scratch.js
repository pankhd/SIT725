
// import libraries and modules 
// start express app

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; 


//Connect to MongoDB 
const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://127.0.0.1:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect(); // Connect to MongoDB
        console.log("Connected successfully to MongoDB");

        const database = client.db("testdb");
        const collection = database.collection("testcollection");

        // Insert a document
        const result = await collection.insertOne({ name: "John Doe", age: 30 });
        console.log("Document inserted with _id:", result.insertedId);

    } finally {
        await client.close(); // Close connection
    }
}

run().catch(console.dir);



// Routes
app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

