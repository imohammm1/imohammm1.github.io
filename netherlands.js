console.log("JS File was loaded");

// 52.1326 N, 5.2913 E -> 52.1326, 5.2913

let map = L.map("map", {
  center: [52.1326, 5.2913],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker(
  [52.1326, 5.2913], {
    title: "The Netherlands"
  }
  ).bindPopup(`<h2 class="colorOne">Hello from CPCC!</h2><hr><iframe width="280" height="120" src="https://www.youtube.com/embed/3ymn7BxITrA" title="Central Piedmont - Community is Who We Are (:15)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);
