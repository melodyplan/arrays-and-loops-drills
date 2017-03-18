/* I tried to follow the instructions exactly, but realize
I'm treating this like html because I don't know how to
format it and i realized this when i don't know how to use
curly brackets. there's so many holes in my education for
JavaScript.

i knew that i have to substitute numbers with words so i used
the .replace(). I also knew that we had to count to something
and increase it by increments of 1.

i did the best i could. this entire course is very confusing.
i'm going to have to go very slow on Loops and most likely arrays.
if there is a way i can take more time on this bit without falling
behind, i'd appreciate it. this is all oerwhelming. i think 
Thinkful did a poor job explaining these subjects and s
elf-researching the topics + having to follow certain instructons
that prevent methods to get to an answer when you already are working
with such a limited and basic foundation is frustrating too.
i'm attending q&a sessions as well of course over the weekend.

*/

function fizzBuzz(countTo) {
  var countTo = i + 1;
  while (countTo % 3 === 0) {
    return countTo.replace(num % 3 === 0, 'fizz');
  while (countTo % 5 === 0) {
    return countTo.replace(num % 5 === 0, 'buzz');
  while (countTo % 3 === 0 && countTo % 5 === 0) {
    return countTo.replace(num % 3 === 0 && num % 5 === 0, 'fizzbuzz');
}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || [];
  
  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {
    
      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();