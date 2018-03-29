
function titleCase(str) {
  
  //put all in lower case
  var allLowerCase = str.toLowerCase();
  
  //push the string in an array of words
  var newArr = allLowerCase.split(" ");
  
  //loop through array and put index 0 in upper case and add that plus the substring to a new string in test array
  var test = "";
  var resultString = "";
  
  for (var i=0; i<newArr.length; i++) {
  
    test += newArr[i][0].toUpperCase() + newArr[i].substr(1) + ' ';
    
  }
  //Remove the superfluous last free space
  return(test.slice(0, -1));
 
}

titleCase("I'm a little tea pot");
