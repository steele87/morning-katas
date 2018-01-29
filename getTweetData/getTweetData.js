// Please do not change the name of this function
var getTweetData = function (str) {
  let tweetInformation = {tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0};
  const hashTag = /#/i;
  let hashTagCounter = 0;
  const atSymbol = /@/i;
  let atSymbolCounter = 0;
  let strLength = str.length;
  
  tweetInformation.length = strLength;
  
  const stringToArray = str.split(' ');
  stringToArray.forEach(function (word) {
    if (hashTag.test(word)) {
      hashTagCounter += 1;
      tweetInformation.tags = [word];
  
      tweetInformation.tagCount = hashTagCounter;
      }
      
      if (atSymbol.test(word)) {
        atSymbolCounter += 1;
        tweetInformation.mentions = [word];
        tweetInformation.mentionCount = atSymbolCounter;
      }
});
};

if (typeof module !== 'undefined') {
  module.exports = {getTweetData};
}
