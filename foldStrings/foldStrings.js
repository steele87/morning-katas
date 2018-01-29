// Please do not change the name of this function
function foldString(str) {

	// your code here
  if (typeof str !== 'string') {return '';}
  let foldedString = [];
  const splitString = str.split(' ');
  

  splitString.forEach(function(word) {
    if (word.length % 2 === 0) {
      const firstHalf = word.slice(0,word.length / 2).split('').reverse();
      const secondHalf = word.slice(word.length / 2).split('').reverse();
      const fullWord = firstHalf.concat(secondHalf).join('');
      foldedString.push(fullWord);
    }
    
  });
 
  return foldedString.join('');
}


module.exports = {foldString};
