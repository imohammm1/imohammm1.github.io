console.log("JS File was loaded");

// 52.1326 N, 5.2913 E -> 52.1326, 5.2913

let map = L.map("map", {
  center: [52.1326, 5.2913],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// keukenhof park: Coordinates: 52.269386 N, 4.548342 E -> 52.269386, 4.548342
let circle = L.circle([52.269386, 4.548342], {
    color: '#402e21',
    fillColor: '#9c7356',
    radius: 10000
}).addTo(map);
