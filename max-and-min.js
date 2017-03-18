/*This is very difficult for me. I don't even know where to start.
I figured there would be a variable I need to make called `myNumbers`
because that came out of nowhere in the intructions. I also knew that
I was probably going to use a for loop because  we just wanted to run 
through it once, like one definite time? That's how i understood it 
anyway. I feel like this drill is way advanced for the information 
we were given in the unit before it. All I did was Google "find largest 
number in an array using JavaScript" which is how I got the stuff below.

the `var myNumbers = [?]` originally said `numbers` but I decided to 
replace with "?" because i have no idea what to put there. i don't
know what i'm dealing with at all here. i'm probably going to a 
q&a session to figure this out with someone*/

function max(numbers) {
  var myNumbers = [?];
  for(var numbersIndex = 0; numbers < numbers.length; numbersIndex++) {
    for(var subNumbersIndex = 0; subNumbersIndex < numbers[numbersIndex].length; subNumbersIndex++) {
      if(numbers[numbersIndex][subNumbersIndex] > myNumbers[numbersIndex]) {
        myNumbers[numbersIndex] = numbers[numbersIndex][subNumbersIndex]; 
      }   
    }
  }
  return myNumbers;
}


function min(numbers) {
 // your code here
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
  // we'll use the variables in our test cases
  var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  var realMin1 = numList1[3];
  var realMax1 = numList1[6];
  var numList2 = [0, 1, 2, 3, 4];
  var realMin2 = numList2[0];
  var realMax2 = numList2[4];
  
  var testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
  ];
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
