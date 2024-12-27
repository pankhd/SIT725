//Import libraries 
const { google } = require('googleapis');
const fs = require('fs');


// credentials accessed trhough client-secret.json 
const auth = new google.auth.GoogleAuth({
    // Your client ID
    client_id: 'YOUR_CLIENT_ID',
    // Your client secret
    client_secret: 'YOUR_CLIENT_SECRET',
    // Your redirect URI
    redirect_uri: 'YOUR_REDIRECT_URI'
});

const places = google.places('v3');
places.placesNearby({
    key:  'YOUR_API_KEY',
    location: '37.7749,-122.4194',
    radius: 1000
}, (error, response) => {
    if (error)
        console.log(error);
    } else {
        console.log(response);
    }
});
