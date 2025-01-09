// Make a request to the Google Pollen Heatmap endpoint
var apiKey = 'AIzaSyCi7FfK3Ck_N0NgZF_0xz0UsXuxxKrg7LY';
var url = 'https://maps.googleapis.com/maps/api/pollen/heatmap/json';
var params = {
  key: apiKey,
  location: '37.7749,-122.4194', // San Francisco, CA
  radius: 10000 // 10 km radius
};

fetch(url + '?' + new URLSearchParams(params).toString())
  .then(response => response.json())
  .then(data => {
    // Overlay the pollen heatmap onto the Leaflet map
    var heatmapLayer = L.heatLayer(data.heatmap, {
      radius: 20,
      blur: 10,
      maxZoom: 17
    }).addTo(map);
  })
  .catch(error => console.error('Error:', error));