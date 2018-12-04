/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  array.forEach(function(item) {
    console.log(item);
  });
};

//logger(["a", "b", "c"]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
  return temperatures.map(temperature => (temperature - 32) * (5 / 9));
  // temperatures.forEach(function(temperature) {
  //   let celsiusTemp = (temperature - 32) * (5 / 9);
  //   celsiusTempArray.push(celsiusTemp);
  // });
  // return celsiusTempArray;
};

// console.log(toCelsius([0, 32, 98]));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function(temperatures, threshhold) {
  return temperatures.filter(temperature => temperature > threshhold);
  // let exceedTempArray = [];
  // temperatures.forEach(function(temperature) {
  //   if (temperature > threshhold) {
  //     exceedTempArray.push(temperature);
  //   }
  // });
  // return exceedTempArray;
};

// console.log(hottestDays([15, 20, 30, 40], 25));

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshhold) {
  let hotDays = hottestDays(temperatures, threshhold);
  let hottestDaysInCelsius = toCelsius(hotDays);
  logger(hottestDaysInCelsius);
};

// logHottestDays([0, 32, 98], 15);

export { logger, toCelsius, hottestDays, logHottestDays };
