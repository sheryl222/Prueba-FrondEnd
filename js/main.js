let map = L.map('map').setView([-12.07239,-77.16770], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([-12.07239,-77.16770]).addTo(map);

let circle = L.circle([-12.06875,-77.18748], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var rectangle = L.rectangle([
    [-12.0683,-77.1323],
    [-12.0680,-77.1320],
    [-12.0675,-77.1366],
    [-12.0665,-77.1390]

]).addTo(map);

var polygon = L.polygon([
    [-12.03424,-77.14225],
    [-12.03418,-77.14223],
    [-12.0336,-77.1416]
]).addTo(map);

marker.bindPopup("<b>Hola mundo!</b><br>Estoy en el Callao.").openPopup();
circle.bindPopup("Estoy en medio del mar.");
rectangle.bindPopup("Nose donde estoy.");
polygon = L.polygon("Que tal ?");


var popup = L.popup()
    .setLatLng([-12.07239,-77.16770])
    .setContent("Holi.")
    .openOn(map);

    
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


$("section").each(function(){
    var tituloseccion = $(this).find("h2").html();
    console.log(tituloseccion);

    var id = $(this).attr("id");
    console.log(id);
    $("#menu-main").append('<li class="nav-item"><a class="nav-link" href="#' + 
        id + '">' + tituloseccion + '</a></li>');
});


$("#menu-item-galeria").click(function(){
    console.log("galeria");
    fetch('galeria/galeria.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(datos) {
        $("#main-content").html(datos);
       
    });
}); 

$("#menu-item-tabla").click(function(){
    
    fetch('tabla/tabla.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(datos) {
        //console.log(datos);
        $("#main-content").html(datos);
    });
}); 