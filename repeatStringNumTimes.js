function repeatStringNumTimes(str, num) {
  // repeat after me
  var newVar="";
  
  if (num > 0) {
  for (var i = 0; i <num; i++){
    newVar += str;
    } return(newVar);
  } else {return("");}
}

repeatStringNumTimes("abc", 3);