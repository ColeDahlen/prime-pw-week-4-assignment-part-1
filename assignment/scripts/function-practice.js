console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name1) {
  console.log('Hello, ', name1)
  return;
};
// Remember to call the function to test
helloName('Cole');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('1 + 3 =', addNumbers(1,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2){
return num0 * num1 * num2;
}
console.log('2 * 3 * 4 = ', multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array1 = ['Pizza', 'Pineapple', 'Coconut'];
function getLast( array ) {
  if (array.length > 0 ){
    return array[array.length - 1];
  }
  else {
    return undefined;
  }
}
console.log('The last item in the array is: ', getLast(array1));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let a of array){
    if(a === value){
      return true;
    }
  }
  return false;
}
console.log(' is in the array: ', find('Coconut', array1));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string[0] === letter){
    return true;
  }
  else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numberArray1 = [3, 5 , 6 , 7 , 1];
function sumAll( array ) {
  let sum = 0
  for(a of array){
    sum = sum + a;
  }
  // TODO: loop to add items
  return sum;
}
console.log('Sume of all the numbers is: ', sumAll(numberArray1));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
