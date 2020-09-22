const assertEqual = function(actual, expected) {
  if(actual === expected){ 
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
  else 
    console.log( ` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `)
};

const findKeyByValue = function( inputObj, userInput){
  const keys = Object.keys(inputObj)
    for(let i = 0; i < keys.length; i++){ 
      if(userInput === inputObj[keys[i]]){ 
        return keys[i]
      }
    }
  }


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



module.exports = findKeyByValue;
