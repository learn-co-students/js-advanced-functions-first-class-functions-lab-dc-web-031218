// Code your solution in this file!
const returnFirstTwoDrivers = function (list) {
  let a = list.slice(0,2);
  return a;
}

const returnLastTwoDrivers = function (list) {
  let a = list.slice(-2);
  return a;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return function (fare) {
    return multiplier * fare
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

const selectDifferentDrivers = function (list, funct) {
  return funct(list);
}
