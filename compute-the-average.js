/* 
i Googled to find this response. i'm just increasing
my Google skills.

i understood that the return has to be the total
divided by the length of the parameter, since that's
all the information i really got.

told the for loop to start at 0, after logging 0
if i is less than the length of the parameter,
`numbers`, increment 1.

i don't know why i have to put "total += numbers[i]"
though. i don't understand Loops at all.
*/

function average(numbers) {
  var total = 0,
      i;
  for (i = 0; i < numbers.length; i += 1) {
     total += numbers[i];  
  }
 return total / numbers.length;
}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

(function runTests() {
  var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var correctAns1 = 5.5;
  var numList2 = [0, -1, 1];
  var correctAns2 = 0;
  
  var testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2)
  ];
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.')
})();