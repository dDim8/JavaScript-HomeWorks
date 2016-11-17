// array = [2, 4, 22, 11, 42, 53, 63];
// array = [2, 4, 22, 11, 42, 53, 3, 0];
// array = [72, 4, 22, 11, 42, 53, 3, 0];



function getMaxNumber(array) {
  
  var max = 0;
  
  for(var i = 0; i < array.length; i++) {
    
    if (array[i] == array.length) {
	 
	  if ( array[i] > max) {
	    max =  array[i];
	  }// end if
	  
    } else {
      
      if ( array[i] > max) {
	max =  array[i];
      }// end if
      
    }// end if-else
    
  }// end for
  
  console.log(max);
  
}// end getMaxNumber()
