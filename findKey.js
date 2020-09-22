
const assertEqual = function(actual, expected) {
  if(actual === expected){ 
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
  else 
    console.log( ` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `)
};



const findKey = function(object, callback){ 
  const arrObj = Object.keys(object)
    for(let i = 0; i < arrObj.length; i++){ 
      if(callback(object[arrObj[i]])){
        console.log(arrObj[i])
      }
   }
}


module.exports = findKey;
