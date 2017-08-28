function findLongestWord(str) {
  var splitArray = str.split(" ");
  var sortedArray = splitArray.sort(function(a, b){
    return a.length - b.length;
  });
  return sortedArray[sortedArray.length -1].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
