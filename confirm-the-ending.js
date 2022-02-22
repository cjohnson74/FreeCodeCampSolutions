function confirmEnding(str, target) {
  var newStr = str.slice(str.length-target.length);
  if (newStr == target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
