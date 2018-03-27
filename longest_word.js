
function findLongestWord(str) {
  
  var newArr = [];
  var counter = 0;
  var max = 0;
  
  //Push the whole string into an array
  newArr = str.split(" ");
  
  //Loop through to find each length
  for (var x = 0; x<newArr.length; x++) {

    if (newArr[x].length > max) {
      max = newArr[x].length;
    }
  }
  return(max);
}

findLongestWord("May the force be with you");