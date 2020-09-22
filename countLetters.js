const assertEqual = function(actual, expected) {
  if(actual === expected){ 
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
  else 
    console.log( ` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `)
};

const countLetters = function(input){ 
  let obj={}  
  let newString = input.split(' ').join('')
  for(x = 0; x < newString.length; x++) {
      let  index = newString.charAt(x)
      if(isNaN(obj[index])){ 
        obj[index] = 1
      }
      else 
      obj[index] += 1
  }
  return obj
}  


module.exports = countLetters;



