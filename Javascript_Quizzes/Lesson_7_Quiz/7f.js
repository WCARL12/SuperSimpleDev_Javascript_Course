// 7f

function convertTemperature(degrees, unit) {
    if (unit === "C") {
      console.log(convertToFarenheit(degrees));
    } else if (unit === "F") {
      console.log(convertToCelsius(degrees));
    } else {
      console.log("Error, cannot convert the degrees. Try again");
    }
  }

  // 7f similar approach
  function convertTemperature_v2(degrees, unit) {
    unit === "C"
      ? console.log(convertToFarenheit(degrees))
      : unit === 'F'
      ? console.log(convertToCelsius(degrees))
      : console.log("Error, cannot convert the degrees. Try again");
  }
  convertTemperature_v2(86, 'C')