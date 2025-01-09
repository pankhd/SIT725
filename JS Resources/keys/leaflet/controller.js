document.querySelector("map", ).onclick = function (){
    var query = document.getElementById("search-input").value;
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    fetch(url);
    .then(response => response.json());
    .then(data =>{
        if data.length > 0 {
            var lat = data[0].lat;
            var long = data[0].long;
            map.setView([lat, long], 13 )
        } else {
            alert("Location not found")
        }
    })
     

    

}