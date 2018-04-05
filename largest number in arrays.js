function largestOfFour(arr) {
  
 var i, q, max = 0;
 var finalArray = [];
  
  //Loop through the array
  for (i=0; i<arr.length; i++) {
    
    //Loop through the sub-array
    for (q=0; q<arr.length; q++) {
      
      //Check for the largest number in the sub-array
      if (arr[i][q] > max) {
        max = arr[i][q];
      } 
    } 
    //push the max to the new array and reset max
    finalArray.push(max);
    max = 0;
    
  } return(finalArray);
   
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
