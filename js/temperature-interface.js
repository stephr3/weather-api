var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').temperatureModule;

$(document).ready(function(){
  $("#get-temperature").click(function(event){
    event.preventDefault();
    var cityInput = $("#city-temperature").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + '&appid=' + apiKey).then(function(response){
      $("#show-city-temperature").text(cityInput);
      var tempObject = new Temperature(response.main.temp);
      console.log(tempObject);
      var tempOutput;
      var unitType = $("#temperature-unit").val();
      switch(unitType) {
        case "Kelvin":
          tempOutput = tempObject.kelvin;
          break;
        case "Celsius":
          tempOutput = tempObject.celsius;
          break;
        case "Fahrenheit":
          tempOutput = tempObject.fahrenheit;
          break;
        default:
          tempOutput = tempObject.fahrenheit;
          unitType = "Fahrenheit";
          break;
      }
      $("#show-temperature").text(tempOutput);
      $("#show-temperature-unit").text(unitType);
      initMap(response.coord.lat, response.coord.lon);
      console.log(response);
      console.log(response);
    }).fail(function(error){
      $("#error-message").text(error.responseJSON.message);
    });
  });
});
