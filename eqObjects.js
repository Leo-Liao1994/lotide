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


const eqObjects = function(object1, object2) {
  let result = true 
  const arrKeys1 = Object.keys(object1) 
  const arrKeys2 = Object.keys(object2) 
  if(arrKeys1.length !== arrKeys2.length){ 
    result = false;
  }
  for(let key = 0; key < arrKeys1.length; key++){
    if(Array.isArray(object1[arrKeys1[key]])){ 
      if(eqArrays(object1[arrKeys1[key]],object2[arrKeys1[key]]) !== true ){
        result = false 
      }
    }
    if(!Array.isArray(object1[arrKeys1[key]])){ 
      if(eqArrays(object1[arrKeys1[key]],object2[arrKeys1[key]]) !== true ){
        result = false 
      }
    }
  } 
  return result
}; 


