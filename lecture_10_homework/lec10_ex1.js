function isNegativeNumber() {
  
  //var array = [1, 17, 44, 920, 32, 8, 22, 846, 23, 3];
  var array = [1, 17, -43, 44, 920, 32, 8, -12, 22, 846, 23, 3];
  
  var countOfNegative = 0;
  var leghtArray = array.length;

 /*for (var number in array) {
    if (number < 0 ) {
      console.log("In for cycle")
      countOfNegative++; 
      console.log("count " + countOfNegative);
    } // end if
  } // end for */
 
 for (var i = 0; i < leghtArray; i++) {
   console.log(array[i]);
     if (array[i] < 0 ) {
      console.log("In for cycle")
      countOfNegative++; 
      console.log("count " + countOfNegative);
    } // end if
  } // end for 
  
  if (countOfNegative > 0) {
    console.log("Found negative numbers in array (" + countOfNegative +")." );
  } 
  else if (countOfNegative == 0){
    console.log("Not found negative numbers in array (" + countOfNegative +")." );
  }
  else {
    console.log("Something wrong! Count is less than 0.." );
  } // end if-else
  
} // end isNegativeNumber func
