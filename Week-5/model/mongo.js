const mongo = require('mongodb');
const express = require('express');

/* Import mongo client. Imports the mongo object from the mongodb library*/
const {MongoClient} = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run (){
    try{
        await client.connect();
        console.log("Mongodb is connected");

        const db = client.db("sit725");
        const collection = db.collection("pizzaMenu");

        /*Insert many rows in db */
        const pizzas = [
        { name: "Margherita", ingredients: ["tomato", "mozzarella", "basil"], price: 8.99 },
        { name: "Pepperoni", ingredients: ["tomato", "mozzarella", "pepperoni"], price: 9.99 },
        { name: "Veggie Supreme", ingredients: ["tomato", "bell peppers", "onion", "olives"], price: 10.49 },
        { name: "Hawaiian", ingredients:["ham", "pineapple", "cheese"], price: 11.40}
        ]

        const result = await collection.insertMany(pizzas);
        console.log(`${result.insertedCount} documents inserted:`, result.insertedIds);


        /*Update one row, by filter constant */
        const filter = { name: "Margherita"}
        const pizzaUpdate= {  
            $set: {
                name: 'Spicy Salami',
                ingredients: [ 'tomato', 'mozzarella', 'salami' ],
            },    
        };
        
        const update = await collection.updateOne(filter, pizzaUpdate)
        const updatedPizzas = await collection.find().toArray();
        console.log("Updated pizza collection:", updatedPizzas);

        /* Delete many rows. Filter by ids in filter constant*/
        const delFilter = {name: {$in: ["Veggie Supreme", "Hawaiian"]}};
        const deleteResult = await collection.deleteMany(filter);
        console.log(`${deleteResult.deletedCount} documents deleted.`);

    }   catch (err){
        console.error("Error connecting:", err);
    }   finally {
        await client.close()
    }
}
run().catch(console.err)






