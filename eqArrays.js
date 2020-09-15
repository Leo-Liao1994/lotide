const assertEqual = function(actual, expected) {
  if(actual === expected){ 
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
  else 
    console.log( ` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `)
}; 

let eqArrays = function(array1, array2){ 
  if(array1 = array2){
    return true 
  }
  else 
    return false 
} 

