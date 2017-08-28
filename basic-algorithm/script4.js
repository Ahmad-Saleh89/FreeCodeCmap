function titleCase(str) {
  var toLowerTitle = str.toLowerCase().split(" ");
  var toUpperTitle=[];
  for(var i = 0; i < toLowerTitle.length; i++){
   toUpperTitle.push(toLowerTitle[i].replace(toLowerTitle[i][0], toLowerTitle[i][0].toUpperCase()));
  }
  toUpperTitle =toUpperTitle.join(" ");
  return toUpperTitle;
}
titleCase("I'm a little tea pot");
