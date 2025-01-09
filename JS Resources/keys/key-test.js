//Import libraries 
const fs = require('fs');

fs.readFile('keys.json', (err, data) =>{
    if (err) {
        console.log(err);
    } else {
        const credentials = JSON.parse(data);
        const apiKey = credentials.apiKey;

        //test api key variable
        console.log(`Api key: ${apiKey}`)
    }
})



