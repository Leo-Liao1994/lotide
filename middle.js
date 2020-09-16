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

  const middle = function(inputArray) {
    output = []
    const arrayLength = inputArray.length
    if(arrayLength <= 2){
      return output
    }
    else if(arrayLength % 2 === 0){ 
      output.push(inputArray[arrayLength / 2 - 1], inputArray[arrayLength / 2])
    }
    else {
      output.push(inputArray[(arrayLength - 1) / 2 ])
    }
    return output
  } 

