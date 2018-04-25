// Code your solution in this file!
const returnFirstTwoDrivers = (function (drivers) {
  return drivers.slice(0, 2);
});

const returnLastTwoDrivers = (function (drivers) {
  return drivers.slice(-2);
});

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(int) {
  return function (fare) {
    return fare*int;
  }
};

const multiply2 = createFareMultiplier(2);

function fareDoubler(fare) {
  multiply2(fare);
};



// function fareTripler() {
//
// };
//
// function selectDifferentDrivers(arrayOfDrivers) {
//
// };
