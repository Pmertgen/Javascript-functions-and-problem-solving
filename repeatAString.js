function repeatStringNumTimes(str, num) {
  if (num > 0) {
    var newStr = [];
    
    for (var i = 0; i < num; i++) {
      newStr.push(str);
    }
    return(newStr.join(''));
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
