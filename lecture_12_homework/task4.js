function randomNumber(a, b) {
  
  if (isNaN(a) || isNaN(b) || a >= b) {
    console.log("Wrong input! Try again!");
    return; 
  } // end if
  
  var randDigit = Math.random() * (b - a) + a;
  console.log("a: " + a + "; b: " + b + "; Rand number: " + randDigit);
   
} // end func randomNumber()
