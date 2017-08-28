
function largestOfFour(arr) {
var largeNum = 0;
  var largestNumArr = [];
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j< arr[i].length; j++){
      if (arr[i][j] >=largeNum){
       largeNum = arr[i][j];
      }   
    }
    largestNumArr.push(largeNum);
    largeNum = 0;
  }
  return largestNumArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
