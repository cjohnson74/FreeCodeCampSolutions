function repeatStringNumTimes(str, num) {
  var newStr = "";
  if (num <= 0) {
    return newStr;
  }
  for (let i = 1; i <= num; i++){
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
