// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
	return [...arr.slice(0,2)];	
}

const returnLastTwoDrivers = function(arr){
	return [...arr.slice(-2)];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
	return function(num){
		return (num*x)
	}
}

let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, fn){
	return fn(arr);
}