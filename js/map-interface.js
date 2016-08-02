initMap = function(latitude, longitude) {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 8
  });
};
