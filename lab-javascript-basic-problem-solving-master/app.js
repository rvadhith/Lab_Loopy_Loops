// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.


var ProGrad_1 = "Adhithya";
console.log("The driver's name is " + ProGrad_1);
var ProGrad_2 = "Ragunathan";
console.log("The navigator's name is " + ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if(ProGrad_1.length > ProGrad_2.length) {
    console.log("The driver has the longest name, it has " + ProGrad_1.length + " characters.");
}
else if(ProGrad_2.length > ProGrad_1.length) {
    console.log("It seems that the navigator has the longest name, it has " + ProGrad_2.length + " characters.");
}
else {
    console.log("Wow, you both have equally long names, " + ProGrad_2.length + " characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.


var vowels = [];
var vowels_position = [];

var string = ProGrad_1;

if(string.includes("a") || string.includes("e") || string.includes("i") || string.includes("o") || string.includes("u") || string.includes("A") || string.includes("E") || string.includes("I") || string.includes("O") || string.includes("U")){
  for(var vowel_count = 0; vowel_count < string.length; vowel_count++)
    if(string[vowel_count] == "a" || string[vowel_count] == "e" || string[vowel_count] == "i" || string[vowel_count] == "o" || string[vowel_count] == "u" || string[vowel_count] == "A" || string[vowel_count] == "E" || string[vowel_count] == "I" || string[vowel_count] == "O" || string[vowel_count] == "U"){
      vowels.push(string[vowel_count])
      vowels_position.push(vowel_count);
    }
}
else {
  console.log("No vowels");
}

console.log(string + " " + vowels.join(" ") + " " + vowels_position.join(" "));


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

var string = ProGrad_1;
var upper_case_characters_count = 0;
var lower_case_characters_count = 0;
var small_case;

for(var i= 0; i < string.length; i++){
  small_case = string[i].toLowerCase();
  if(string[i] == small_case){
    lower_case_characters_count = lower_case_characters_count + 1;
  }
  else {
    upper_case_characters_count = upper_case_characters_count + 1;
  }
}

console.log("The number of uppercase characters is " + upper_case_characters_count);
console.log("The number of lowercase characters is " + lower_case_characters_count);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
