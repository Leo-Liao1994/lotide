
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

  module.exports = middle;


