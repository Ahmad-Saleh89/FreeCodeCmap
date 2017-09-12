function destroyer(arr) {
  // Remove all the values

  var args = Array.from(arguments).slice(1);
  console.log(args);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
