// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244], // 0
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863], // 11
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRzaWx2YWJyYXZvIiwiYSI6ImNsaXV5YngydDJ4MXAzZmxnaWttaTNuMzIifQ.00hnLGUQGXQSZyffjuTzbQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// let pacman = document.createElement('div');
let pacmanDiv = document.getElementById('pacman');
pacmanDiv.className = 'item';

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let pacmanMarker = new mapboxgl.Marker(pacmanDiv)
  .setLngLat(busStops[busStops.length-1])
  .addTo(map);

console.log("-- Inicio --");
var today = new Date();
console.log("Hora: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
console.log("Coordenadas: " + busStops[busStops.length-1]);


// Add markers for the fruits on the road
let fruitDivs = [];

for (var i = busStops.length-2; i >= 0; i--) {
	let fruitDiv = document.createElement('div');
	fruitDiv.className = 'fruit item';
	let markerFruit = new mapboxgl.Marker(fruitDiv)
		.setLngLat(busStops[i])
		.addTo(map);
	fruitDivs[i] = fruitDiv;
	fruitDivs[i].id = 'fruit' + i;
}


// counter here represents the index of the current bus stop
let counter = busStops.length-1;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() =>{
    counter--;
    console.log("Counter: " + counter);
	// Date
    today = new Date();
    console.log("Hora: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    console.log("Coordenadas: " + busStops[counter]);
	// Erase fruit
	let fruitToErase = document.getElementById('fruit' + counter);
	fruitToErase.remove();
	//Move Pacman
    pacmanMarker.setLngLat(busStops[counter]);
    if (counter >0) move();
  }, 1000);
}