
// array = [ 1, 3, 'margin', false, '23', 43, 'false', true, 3221];

function ClearArray(array) {
  
 for(var i = 0; i < array.length; i++) {
   if (array[i] == false || array[i] == 'false') {
     array.splice(i, 1);
    } // end if
  } // end for
  
  console.log(array);
} 
