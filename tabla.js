const tabla = document.querySelector('#tbody-tabla');
const opciones = {
  method: 'POST'
}
 fetch('php/datitos.php',opciones)
 .then(respuesta => respuesta.json())
 
 .then(resultado =>{
resultado.forEach(element => {
  tabla.innerHTML += `
    <tr>
    <th scope="row">${element.id}</th>
    <td>${element.address}</td>
    <td>${element.latitude}</td>
    <td>${element.longitude}</td>
    <td>${element.altitude}</td>
    
  </tr>


    `
  
});
});


(function(document){
  'buscador';

  var LightTableFilter = (function(Arr){
    var _input;

    function _onInputEvent(e){
      _input = e.target;
      var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      Arr.forEach.call(tables, function(table){

        Arr.forEach.call(table.tBodies, function(tbody){
          Arr.forEach.call(tbody.rows, _filter);
        });
      
    
  });
}
function _filter(row){
  var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
  row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
}
return {
  init: function(){
    var inputs = document.getElementsByClassName('light-table-filter');
    Arr.forEach.call(inputs, function(input){
      input.oninput = _onInputEvent;
    
  });

  }
};
 })(Array.prototype);
 document.addEventListener('readystatechange', function(){
  if (document.readyState === 'complete'){
    LightTableFilter.init();
  }
 });

})(document);

var filaSeleccionada;

function aplicarEventos() {
  $("#tbody-tabla tr").mouseenter(function () {
    var filaActual = $(this);
    var id = $(this).find("td:nth-child(1)").text();
    var address = $(this).find("td:nth-child(2)").text();
    var latitude = $(this).find("td:nth-child(3)").text();
    var longitude = $(this).find("td:nth-child(4)").text();
    var altitude = $(this).find("td:nth-child(5)").text();

    $(this)
      .find("td:last-child")
      .append(
        "<div class='controles-edicion'>" +
          "<i class='fas fa-pen icono-editar'></i>" +
          "<i class='fas fa-times icono-eliminar'></i></div>"
      );
    $(".icono-editar").click(function () {
      filaSeleccionada = filaActual;
      $("#formulario-editar").slideDown("slow");
      $("#txtid").val(id);
      $("#txtaddress").val(address);
      $("#txtlatitude").val(latitude);
      $("#txtlongitude").val(longitude);
      $("#txtaltitude").val(altitude);
      
    });
    $(".icono-eliminar").click(function () {
      var respuesta = confirm(
        "¿Esta seguro que quiere eliminar ? " + address
      );
      console.log(respuesta);
      if (respuesta == true) {
        eliminarCategoria(id);
        filaActual.remove();
      }
    });
  });
  $("#tbody-tabla tr").mouseleave(function () {
    $(this).find("td:last-child").find("div").remove();
  });
}

$("#btnCerrar").click(function () {
  $("#formulario-editar").slideUp("slow");
});

$("#btnActualizar").click(function () {
  $("#formulario-editar").slideUp("slow");
});

$("#btnActualizar").click(function () {
  var id = $("#txtid").val();
  var address = $("#txtaddress").val();
  var latitude = $("#txtlatitude").val();
  var longitude = $("#txtlongitude").val();
  var altitude = $("#txtaltitude").val();
  var ruta ="http://localhost/dataset/actualizardatitos.php";

  var formData = new FormData();
  formData.append("id", id);
  formData.append("address", address);
  formData.append("latitude", latitude);
  formData.append("longitude", longitude);
  formData.append("altitude", altitude);

  fetch(ruta, {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      return null;
    })
    .then(function (datos) {
      filaSeleccionada.find("td:nth-child(1)").text(id);
      filaSeleccionada.find("td:nth-child(2)").text(address);
      filaSeleccionada.find("td:nth-child(3)").text(latitude);
      filaSeleccionada.find("td:nth-child(4)").text(longitude);
      filaSeleccionada.find("td:nth-child(5)").text(altitude);
    });
  $("#formulario-editar").slideUp("slow");
});

function eliminarCategoria(idNumeroSeguro) {
  var ruta ="http://localhost/dataset/deletedatitos.php";

  var formData = new FormData();
  formData.append("id", id);

  fetch(ruta, {
    method: "POST",
    body: formData,
  }).then(function (response) {
    return null;
  });
}

