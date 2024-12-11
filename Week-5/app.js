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
