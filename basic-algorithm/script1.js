
function factorialize(num) {
//    var numArr = [];
  if (num === 0){

    return 1;
  }
  
  var count = num;
  for(var i = 1; i<count; i++){
    num = num *i;
  }
  return num;
 }

factorialize(5);
