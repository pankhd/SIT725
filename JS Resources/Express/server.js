const express = require("express");
const app = express();
const port = 3000;

app.get('/', (request, response)=>{
    response.send("Hello Express:)")
})

app.listen(port, () => {
    console.log("App is listeningg on Port ${port}")
})

app.post("/add-data", (req, res)=>{
    console.log()
})