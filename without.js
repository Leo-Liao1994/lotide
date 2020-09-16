const assertEqual = function(actual, expected) {
  if(actual === expected){ 
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
  else 
    console.log( ` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `)
}; 


let eqArrays = function (arr1, arr2) {
  let result
  if (arr1.length !== arr2.length) {
    result = false
  }

for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    result = false
    break;
  }
  else 
    result = true 
  }
  return result
}; 

let assertArraysEqual = function(array1, array2){ 
    if (eqArrays(array1,array2) === true){ 
      console.log( `✅✅✅ Assertion Passed: ${array1} === ${array2} `)
    }
    else 
    console.log( ` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2} `)
  }  

const without = function (array1, array2){ 
  let output =[]
  for(let i = 0; i < array1.length; i++){ 
    if(array2.indexOf(array1[i]) === -1){
      output.push(array1[i])
    }
  }
  console.log(output)
} 




