const convertToCelsius = function (fahrenheit) {
  convertedCelsius = (fahrenheit - 32) * (5 / 9);
  Math.round(convertedCelsius); // round first decimal
  return parseFloat(convertedCelsius.toFixed(1))


};

const convertToFahrenheit = function (celsius) {
  convertedFahrenheit = celsius * (9 / 5) + 32;
  Math.round(convertedFahrenheit);
  return parseFloat(convertedFahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
