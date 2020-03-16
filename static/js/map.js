var start_day;
var end_day;

//get geojson data from link
function get_data_from_url(url){
    var http_req = new XMLHttpRequest();
    http_req.open("GET",url,false);
    http_req.send(null);
    return http_req.responseText;          
}




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



jQuery(function() {
  
  jQuery('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    start_day = start.format('YYYY-MM-DD')
    end_day = end.format('YYYY-MM-DD')

    

    var nparams = "?$where=issueddate > " + "'" + start_day + "'" + "and issueddate < " + "'" + end_day + "'";


    console.log(nparams);

   

    
    //Markers-----------

    
    
  var cal_geo = 'https://data.calgary.ca/resource/c2es-76ed.geojson' + nparams;
  var cal_obj = JSON.parse(get_data_from_url(cal_geo));
  console.log(cal_obj);
  console.log(cal_geo);
  
  
  markers.clearLayers();

  geojsonLayer = L.geoJson(cal_obj, {
    
    onEachFeature: function(feature,layer){
      layer.bindPopup("<p>Issued Date: <p>" + feature.properties.issueddate + "<br>" + "<p>Community Name: <p>" + feature.properties.communityname + "<br>" + "<p>Work Class Group: <p>" + feature.properties.workclassgroup + "<br>" + "<p>Contractor Name: <p>" + feature.properties.contractorname + "<br>" + "<p>Original Address: <p>" + feature.properties.originaladdress).openPopup;

    }
    });
  

  markers.addLayer(geojsonLayer);
  featureGroup.addLayer(markers);
  featureGroup.addTo(map);
    

  });
  
});

function clear_layers(){
map.removeLayer(geojsonLayer);
};

$(function() {
$('input[name="single_date"]').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
  minYear: 1901,
  maxYear: parseInt(moment().format('YYYY'),10)
}, function(start, end, label) {

  start_day = start.format('YYYY-MM-DD')
  console.log("Single Date: ", start_day);

  const params = new URLSearchParams({
    issueddate: start_day,
  });

  var nparams = "?" + params + "T00:00:00.000";

  console.log(params.toString());
  console.log(nparams);



  
  //Markers-----------

  
  
var cal_geo = 'https://data.calgary.ca/resource/c2es-76ed.geojson' + nparams;
var cal_obj = JSON.parse(get_data_from_url(cal_geo));
console.log(cal_obj);
console.log(cal_geo);


markers.clearLayers();

geojsonLayer = L.geoJson(cal_obj, {

  onEachFeature: function(feature,layer){
    layer.bindPopup("<p>Issued Date: <p>" + feature.properties.issueddate + "<br>" + "<p>Community Name: <p>" + feature.properties.communityname + "<br>" + "<p>Work Class Group: <p>" + feature.properties.workclassgroup + "<br>" + "<p>Contractor Name: <p>" + feature.properties.contractorname + "<br>" + "<p>Original Address: <p>" + feature.properties.originaladdress).openPopup;

  }

  });

  markers.addLayer(geojsonLayer);
  featureGroup.addLayer(markers);
  featureGroup.addTo(map);
  

});
});


function clear_markers(){
markers.clearLayers();
};





