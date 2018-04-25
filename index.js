

const returnFirstTwoDrivers =  function(array) {
  sliced = array.slice(0,2)
  return sliced
}

const returnLastTwoDrivers = function(array) {
  sliced = array.slice(array.length - 2, array.length)
  return sliced
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(fare){
    return fare * num
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(array, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array)
  }
    else {
      return returnLastTwoDrivers(array)
    }
  }



// selectDifferentDrivers() — This function takes two arguments, an array of drivers and
// either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments,
// selectDifferentDrivers() will return either the first two drivers or the last two drivers.
