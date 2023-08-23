function convert() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(celsius)) {
      var convertedFahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = convertedFahrenheit.toFixed(2);
      resultElement.textContent = celsius + "°C is equal to " + convertedFahrenheit.toFixed(2) + "°F";
    } else if (!isNaN(fahrenheit)) {
      var convertedCelsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = convertedCelsius.toFixed(2);
      resultElement.textContent = fahrenheit + "°F is equal to " + convertedCelsius.toFixed(2) + "°C";
    } else {
      resultElement.textContent = "Please enter a valid temperature.";
    }
  }
  
