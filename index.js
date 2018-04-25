
 const returnFirstTwoDrivers = function (drivers){
   return [drivers[0] ,drivers[1]]
 }
 const returnLastTwoDrivers = function (drivers){
   return [drivers[drivers.length-2] , drivers[drivers.length-1]]
 }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int){
  return function(int){return int * int}
}

const fareDoubler = function (int){
  return int * 2
}

const fareTripler = function (int){
  return int * 3
}
const selectDifferentDrivers = function (arrayOfDrivers, func){
  return func(arrayOfDrivers);
}
// const createFareMultiplier
