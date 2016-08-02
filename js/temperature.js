function Temperature(kelvinInput) {
  this.kelvin = Math.round(kelvinInput);
  this.celsius = Math.round(kelvinInput - 273.15);
  this.fahrenheit = Math.round(kelvinInput * (9/5) - 459.67);
}

exports.temperatureModule = Temperature;
