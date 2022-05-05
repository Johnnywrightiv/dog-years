/* program originally used arithmetic operators (*=, +=, etc)
removed to make more succinct, but they are still there, don't forget to use them when needed */


// variable for my age
let myAge = 27;

// dogs age faster in the first two years of their life than the remaining years
// the first two years each are equivalent to 10.5 human years
var earlyYears = 2 * 10.5;

// we already accounted for first 2 years in earlyYears variable, remove 2 human years from myAge and set as new variable
// past first 2 years dogs age at a rate of 4:1 in dog years to human years. This line multiplys myAge's remaining years by 4 (after calculating the age rate for the first 2 years)
var laterYears = (myAge - 2 * 4);

// adding together
var myAgeInDogYears = earlyYears + laterYears;

// assigning my name to a variable called myName
var myName = "JoHn";
// calling the .toLowerCase() string method and reassigning myName variable
myName = myName.toLowerCase();

// logging text output to console by using `` (back ticks) for string interpolation and ${} for template literals to inject variables into strings.
console.log(`My name is ${myName}. I am ${myAge} in human years, which is ${myAgeInDogYears} years old in dog years.`);
