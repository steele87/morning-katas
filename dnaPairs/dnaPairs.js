// Please do not change the name of this function
var dnaPairs = function (dna) {

  var pairedDna = [];
  var splitDna = dna.split('');
  for (var i = 0; i < splitDna.length; i++) {
    if (splitDna[i] === 'G' || splitDna[i] === 'g') {
       pairedDna.push(['G','C']);
    }
    else if  (splitDna[i] === 'A' || splitDna[i] === 'a') {
       pairedDna.push(['A','T']);
    }
    else {
     pairedDna;
    }
  }

return pairedDna;

};

if (typeof module !== 'undefined') {
  module.exports = {dnaPairs};
}
