function rot13(str) { // LBH QVQ VG!
   var rotStr = '';
  for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77){
    rotStr+= String.fromCharCode((str.charCodeAt(i))+13);
    }
    if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90){
    rotStr+= String.fromCharCode((str.charCodeAt(i))-13);
    }
    if(str.charCodeAt(i)< 65 || str.charCodeAt(i) > 90){
      rotStr += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return rotStr;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
