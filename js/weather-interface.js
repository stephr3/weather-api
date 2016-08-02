var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#get-humidity").click(function(event){
    event.preventDefault();
    var cityInput = $("#city").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + '&appid=' + apiKey).then(function(response){
      $("#show-city").text(cityInput);
      $("#show-humidity").text(response.main.humidity);
      initMap(response.coord.lat, response.coord.lon, "humidity-map");
      console.log(response);
    }).fail(function(error){
      $("#error-message").text(error.responseJSON.message);
    });
  });
});
