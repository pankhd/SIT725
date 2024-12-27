const heatmap = new google.maps.visualization.HeatmapLayer({
    // Your API key
    key: 'YOUR_API_KEY',
    // Your heatmap data
    data: [
      new google.maps.LatLng(37.7749, -122.4194),
      new google.maps.LatLng(37.7859, -122.4364),
      new google.maps.LatLng(37.7963, -122.4575),
      // Add more data points as needed
    ],
    // Your heatmap options
    options: {
      dissipating: false,
      maxIntensity: 100,
      radius: 20,
    }
  });
  
  heatmap.setMap(null); // Set the heatmap to a null map initially
  
  // Create a new map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 13,
  });
  
  // Set the heatmap to the new map
  heatmap.setMap(map);