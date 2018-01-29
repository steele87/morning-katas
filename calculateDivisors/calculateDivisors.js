var calculateDivisors = function (num) {

  let divisibleNumbers = 0;

  for (var i = 1; i < num; i++) {
    if (i % 3 === 0) {
      divisibleNumbers += i;
    
    }  
  }

 return divisibleNumbers;

  };
  
  if (typeof module !== 'undefined') {
    module.exports = {calculateDivisors};
  }