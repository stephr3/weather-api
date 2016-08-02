initMap = function(latitude, longitude, target) {
  var map;
  map = new google.maps.Map(document.getElementById(target), {
    center: {lat: latitude, lng: longitude},
    zoom: 8
  });
};
