const express = require('express');
const app = express();
const L = require('leaflet');

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossorigin=""/>

        <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
          integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyI="
          crossorigin=""></script>

        <style>
          #map {
            width: 600px;
            height: 400px;
            border: 1px solid black;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>

        <script>
          var map = L.map('map').setView([51.505, -0.09], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c']
          }).addTo(map);
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});