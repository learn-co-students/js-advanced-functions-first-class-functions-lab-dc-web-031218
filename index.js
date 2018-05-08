// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
	let newArray = [];
	newArray.push(array[0]);
	newArray.push(array[1]);
	return newArray;
}

const returnLastTwoDrivers = function(array){
	let newArray = [];
	let index = array.length - 1;
	newArray.push(array[index -1]);
	newArray.push(array[index]);
	return newArray;
}

function selectingDrivers(returnFirstTwoDrivers,returnLastTwoDrivers){
	return [returnFirstTwoDrivers, returnLastTwoDrivers];
};

function fareDoubler(fare){
 	return fare * 2;
 }

 function fareTripler(fare){
 	return fare * 3;
 }

 function createFareMultiplier(value){
 	return function(value){
 		return value * value;
 	}
 }

function selectDifferentDrivers(arrayOfDrivers, function){
 	return function(arrayOfDrivers);
 }