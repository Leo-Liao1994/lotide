const assertEqual = function(actual, expected) {
  if(actual === expected){ 
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
  else 
    console.log( ` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `)
}; 


let eqArrays = function (arr1, arr2) {
  let result = true
  if (arr1.length !== arr2.length) {
    result = false
  }

for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    result = false
    break;
    }
  }
  return result
}; 

