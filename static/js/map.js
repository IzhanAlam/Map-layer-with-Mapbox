
var map = L.map('mapid').setView([51.0447, -114.0719], 11);

var featureGroup = L.featureGroup();
var geojsonLayer = L.geoJSON().addTo(map);
var markers = L.markerClusterGroup();


var layers = document.getElementById('menu-ui');




var layer1 = L.tileLayer(
  'https://api.mapbox.com/styles/v1/izhanalam/ck7ty90g50vzr1is1dmhhug57/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXpoYW5hbGFtIiwiYSI6ImNrN2s2ZDFiaTAzbzgzZG11MG1xMHdlZzEifQ.uBG-TBw1B2h81lSwJcLPvg',  {
      tileSize: 512,
      zoomOffset: -1,
      attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });



var layer2 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXpoYW5hbGFtIiwiYSI6ImNrN2s2ZDFiaTAzbzgzZG11MG1xMHdlZzEifQ.uBG-TBw1B2h81lSwJcLPvg'
}).addTo(map);


//https://api.mapbox.com/styles/v1/izhanalam/ck7u70ax90z021ipamn7ndflk.html?fresh=true&title=view&access_token=pk.eyJ1IjoiaXpoYW5hbGFtIiwiYSI6ImNrN2s2ZDFiaTAzbzgzZG11MG1xMHdlZzEifQ.uBG-TBw1B2h81lSwJcLPvg
var layer3 = L.tileLayer(
  'https://api.mapbox.com/styles/v1/izhanalam/ck7u70ax90z021ipamn7ndflk/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXpoYW5hbGFtIiwiYSI6ImNrN2s2ZDFiaTAzbzgzZG11MG1xMHdlZzEifQ.uBG-TBw1B2h81lSwJcLPvg',  {
      tileSize: 512,
      zoomOffset: -1,
      attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
//https://api.mapbox.com/styles/v1/izhanalam/ck7uaqhpi0tva1is5xucpnar3.html?fresh=true&title=view&access_token=pk.eyJ1IjoiaXpoYW5hbGFtIiwiYSI6ImNrN2s2ZDFiaTAzbzgzZG11MG1xMHdlZzEifQ.uBG-TBw1B2h81lSwJcLPvg
var layer4 = L.tileLayer(
    'https://api.mapbox.com/styles/v1/izhanalam/ck7uaqhpi0tva1is5xucpnar3/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXpoYW5hbGFtIiwiYSI6ImNrN2s2ZDFiaTAzbzgzZG11MG1xMHdlZzEifQ.uBG-TBw1B2h81lSwJcLPvg',  {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

function add_layer(layer){

  map.removeLayer(layer1);
  map.removeLayer(layer2);
  map.removeLayer(layer3);
  map.removeLayer(layer4);


  if (map.hasLayer(layer)){
    map.removeLayer(layer);
  }
  else {
    map.addLayer(layer);
  }
};






