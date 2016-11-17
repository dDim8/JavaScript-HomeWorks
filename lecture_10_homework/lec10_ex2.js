function isJaggedArray() {
  
  //var array = [1,2,3,4,5,6,12,18,22,32,55,105];
  var array = [12, 3, 5, 1, 105, 3, 55, 106, 4 ];
  
  var lenghtArray = array.lenght;
  var countOfNumbers = 0;
  
  for (var i = 0; i < lenghtArray-1; i++) {
    
    if (array[i] < array[i+1]) {
      countOfNumbers++;
    } // end if
    
  } // end for
  
  if ((countOfNumbers + 1) === lenghtArray) {
    console.log("Array is jagged.");
  }
  else {
    console.log("Array is not jagged.");
  }
  
} // end isJaggedArray func
