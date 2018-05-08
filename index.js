// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
	return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
	let newArray = [];
	let index = array.length - 1;
	newArray.push(array[index -1]);
	newArray.push(array[index]);
	return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function fareDoubler(fare){
 	return fare * 2;
 }

 function fareTripler(fare){
 	return fare * 3;
 }

 function createFareMultiplier(value){
 	return function(fare){
 		return value * fare;
 	}
 }

function selectDifferentDrivers(arrayOfDrivers, fn){
 	if (fn === returnFirstTwoDrivers){
 		return returnFirstTwoDrivers(arrayOfDrivers);
 	} else {
 		return returnLastTwoDrivers(arrayOfDrivers);
 	}
 }
