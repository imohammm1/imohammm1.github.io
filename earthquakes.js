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

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);
     function onEachFeature(feature, layer)
      {
        layer.bindPopup(`<center>
        <h3>${feature.properties.place}</h3>
        <hr>
        <p>${new Date(feature.properties.time)}</p>
        <p><b>Magnitude</b> ${feature.properties.mag.toFixed(2)}</p>
        </center>`);
      }

    let earthquakes = L.geoJSON(data.features, {
      onEachFeature: onEachFeature
    }).addTo(map);
  }
