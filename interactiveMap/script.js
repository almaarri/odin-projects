//script for interactiveMap.html

//location set to Taoudenni, Mali
var mymap = L.map('map').setView([22.646, -3.98], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(mymap);

  //marker for salt mine
  var marker = L.marker([22.646, -3.98]).addTo(mymap);
  marker.bindPopup("Taoudenni Salt Mine").openPopup();
