var censoredWords = ["fuck", "bitch", "shit"];
var customCensoredWords = []; 
function censoredWords(inStr) {
  for (idx in censoredWords) {
    inStr = inStr.replace(censoredWords[idx], "****") 
  }
  for (idx in censoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****") 
  }
  return inStr;
}
function addCensoredWord(word) {
  customCensoredWords.push(word);
}
function getCensoredWords() {
  return censoredWords.push(word); 
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords; 