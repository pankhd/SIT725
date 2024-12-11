const {MongoClient} = require("mongodb");

const uri = "mongodbserver://connection-string"

const client = new MongoClient (uri);
async function run(){
    try {
        await client.connect();
    } finally {
        await client.close();
    }
}

run().catch(console.dir);


