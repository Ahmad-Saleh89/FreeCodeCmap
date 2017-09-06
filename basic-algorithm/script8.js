function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num <= 3){
    return str.slice(0, num) + "...";
  }
  if (num >= str.length){
    return str;
  }
  return str.slice(0, num-3) +"...";
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
