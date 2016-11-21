function sumOf3Digits() {
  
  var arr = [1, 6, 3, 5, 234, 678, 34, 88, 72, 43, 13, 1, 5, 18, 56, 57, 11, 42, 38, 54];
  var sum = 144;
  var temp = 0;
  
  
  for(var i = 0; i < arr.length; i++) {
    
    for(var j = 0; j < arr.length; j++) {
      
      for (var k = 0; k < arr.length; k++) {
	
	 temp = arr[i] + arr[j] + arr[k];

// find all numbers	 
/*	if (temp == sum) {
	  console.log("Found the sum!\ni: " + arr[i] +  "; j: " + arr[j] + "; k: " + arr[k]);
	}
*/
// find first number
	  if (temp == sum) {
	    console.log("Found the sum!\ni: " + arr[i] +  "; j: " + arr[j] + "; k: " + arr[k]);
	    return;
	  } // end if
      } // end k-for
    } // end j-for
  } // end i-for
} // end func sumOf3Digits()
