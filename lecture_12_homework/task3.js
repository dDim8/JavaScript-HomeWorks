function getAndSumNumbers(a, b, c, d, e, f) {

  var sum = 0;
  var digit = 0;
  
  for (var i = 0; i < arguments.length; i++) {
     digit = arguments[i];
    if (!isNaN(digit)) {
      sum += digit;
    } // end if
  } // end for
  
  console.log(sum);
} // end func getAndSumNumbers()
