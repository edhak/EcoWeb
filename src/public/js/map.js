const express = require('express')
const router = express.Router()
const Task = require('../model/task')

let fn_mal = () => {
  console.log("algo anda mal, no se obtine las localización");
}

var posicion_inicio;

let fn_ok = (rta) => {
  posicion_inicio = {
    lat: rta.coords.latitude,
    lng:rta.coords.longitude
  }
  console.log(posicion_inicio)
}

navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);

let initMap = (datos) => {
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: posicion_inicio
  });

  let marker = new google.maps.Marker({
    position: posicion_inicio,
    map: map,
    title: 'YO'
  });


    for(i = 0; i<datos.length; i++){
      let position = new google.maps.LatLng(
                    datos[i].coords.lat,
                    datos[i].coords.lng
                    );
                  // console.log(datos[i].coord.latitud);
      // bounds.extend(position);
      marker = new google.maps.Marker({
        position: position,
        map: map
      });
    }//fin for
}

module.exports =
