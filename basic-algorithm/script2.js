
function palindrome(str) {
var lowRepStr= str.replace(/\W|_/g , '').toLowerCase();
console.log(lowRepStr);
var reversed= lowRepStr.split("").reverse().join('');
console.log(reversed);
  return Boolean (lowRepStr == reversed);
}

palindrome("eye");
