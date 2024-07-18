console.log("JS File was loaded")


let url= "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

d3.json(url).then(
  function(data)
  {
    console.log(data);

    let map = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker(
  [35.2176665, -80.831473], {
    title: "CPCC Central Campus"
  }
  ).bindPopup(`<h2 class="colorOne">Hello from CPCC!</h2><hr><iframe width="280" height="120" src="https://www.youtube.com/embed/3ymn7BxITrA" title="Central Piedmont - Community is Who We Are (:15)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);
  }
);
