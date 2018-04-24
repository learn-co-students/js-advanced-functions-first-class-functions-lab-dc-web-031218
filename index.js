// Code your solution in this file!
const drivers = [];

const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  const twoDrivers = [...drivers.slice(0,2)];
  return twoDrivers;
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  const lastTwo = [...drivers.slice(-2)];
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const farMultiplier = (function () {});
function createFareMultiplier(multiplier) {
  const fareMultiplier = function(num) {
    return num * multiplier;
  };
  return fareMultiplier;
}

function fareDoubler(fare) {
  const fareDoubled = function() {
    return fare * 2;
  };
  return fareDoubled();
}


function fareTripler(fare) {
  const fareTripled = function() {
    return fare * 3;
  };
  return fareTripled();
}

// const selectDifferentDrivers = (arrayOfDrivers, (function () {}));
function selectDifferentDrivers(arrayOfDrivers, func) {
  const twoDrivers = func(arrayOfDrivers)
  return twoDrivers;
}
