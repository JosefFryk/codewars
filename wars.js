//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(str){
    return str.split(' ').map( a => a.length < 5 ? a : a.split('').reverse().join('') ).join(' ') }



//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    let newArr = n.toString()
    let final = Number(newArr.split("").sort(function(a, b){return b-a}).join(""))
    console.log(final)
    return final
  }

 // Given an integral number, determine if it's a square number: The tests will always use some integral number, so don't worry about that in dynamic typed languages.
/* -1  =>  false
    0  =>  true
    3  =>  false
    4  =>  true
    25  =>  true
    26  =>  false */

var isSquare = function(n){
        return n >= 0 && Math.sqrt(n) % 1 === 0 
      }
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// describ
function XO(str) {

    // lower case
    str = str.toLowerCase();
    // into array
    var arrayOfCharacters = str.split("");
    //count x
    var countX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
      }, 0);

    // count o
    var countO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
      }, 0); 
    // compere
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}
// short
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
//  so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones
//   -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
//   You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
//    so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
//    (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
//  It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  //nerovna se 10min
  if (walk.length !== 10) return false;
   //set vari  
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;
  // loop pres array 
  for (i=0; i<walk.length; i++) {
    if (walk[i] == 'n') north++;
    else if (walk[i] == 's') south++;
    else if (walk[i] == 'e') east++;
    else if (walk[i] == 'w') west++;
  };
  // jestli dorazi na stejne misto
  if ((north == south) && (west == east)) return true;
  return false;
};

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
//  which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
  let i = 0
  while (num.toString().length !== 1) {
    num = num.toString().split("").reduce((a,b)=> a*b); i++;
  } 
  return i
}

// You are going to be given a word. Your job is to return the middle character of the word.
//  If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  
  if (s.toString().length % 2 == 0 ){
  return s.toString().slice([s.length/2-1], [s.length/2 +1])
  }else {
    return s.toString().slice([s.length/2], [s.length/2 +1])
  }
}


// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
  return s.trim().split(" ").sort((a,b) =>
    a.length - b.length)[0].length
  }

//Sum of Digits / Digital Root
  // Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
  //  The input will be a non-negative integer.
 
 function digital_root(n) {
    if (n < 10)                     // if bez curly braces, kvuli vice return, kdyz je prvni  false prejde na dalsi
      return n;
      return digital_root(          //vrati zpet na zacatek funkce
      n.toString().split('').reduce((a,b) => {     //array -> sum
        return a + +b;                // +b to number, Unární operace stejne jako -x
   },0))
  }
  


// Find the odd int
//   Given an array of integers, find the one that appears an odd number of times.
//   There will always be only one integer that appears an odd number of times. 
  function findOdd(A) {
    let  oddCount = 0
    let newArr = A.sort((a,b) => a - b )
    for (let i = 0; i < A.length; i++) {
      for (let p = 0; p < A.length; p++){
        if (newArr[i] == newArr[p]){
         oddCount++                           // double loop array aby jsme ziskali true za kazdy int dale porovname pocet trues
      } 
    }
    if (oddCount % 2 !== 0) { //porovna pocet trues z loops
        return newArr[i];
      }
    }
  }

// clever solution -> 
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


// Which are in?
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
  let result = [];
  outer :for ( let i = 0; i < array1.length; i ++){
    for ( let j = 0; j < array2.length; j ++){  
      if ( array2[j].includes(array1[i])) {   
        result.push(array1[i])
        continue outer;   // will skip the remaining statements of the nested loop and start the next iteration of the loop that is labelled as outer.
      }
     }
   }
   return result.sort()
}

// easier sollution
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}


 // Find The Parity Outlier
//   You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//    The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//    Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(int){                          // filter odd a even to array
  let even = int.filter(a => a % 2 === 0);
  let odd = int.filter(a  => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];   // kdyz je even array = 1 return prvni element z even /!= odd prvni element
}

// Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
function sortArray(array) {
  const oddArray = [];
  const evenArray = [];
  const count = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
       evenArray.push(array[i])
    }else {
       oddArray.push(array[i]);
    }
  }
  oddArray.sort((a,b) => a-b)
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
      count.push(evenArray.shift())
    }else {
      count.push(oddArray.shift())
    }
  }
  return count
}

// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  let regExp =/[-_]\w/ig;
 // odstranit znaky, funkce na vyhledani druhyho slova to uppercase
 return str.replace(regExp, function(firstLetter){
   return firstLetter.charAt(1).toUpperCase()
 })

}

// Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(arr) {
  let format = '(xxx) xxx-xxxx'; //variable pro format

  arr.forEach(item => {                                           // loop pro kazdy x cislo
      format = format.replace('x', item);
  });

  return format;
}

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.



function duplicateCount(text){
  return (text.toLowerCase().split("").sort().join('').match(/([^])\1+/g) || []).length
   }
 
   ///vsechno na lower, split,seradit,spojit, match regex nebo array vse do zavorky a .length kvuli count


 
//  Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

//  The Haskell version takes a list of directions with data Direction = North | East | West | South.
//  The Clojure version returns nil when the path is reduced to nothing.
//  The Rust version takes a slice of enum Direction {North, East, West, South}.

function dirReduc(arr){
  let str = arr.join("")
  let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g
  while(pattern.test(str)) {
      str = str.replace(pattern, '')
  }

  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}



// Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
  let highScore = 0;
  let word = '';
  let wordArr = x.split(' ');
  for (let i = 0; i < wordArr.length; i++) {
  let wordScore = 0;
    let iword = wordArr[i];
    for (let j = 0; j < iword.length; j++) {
      wordScore = wordScore + (iword.charCodeAt(j)-96);
      
    }
    if (wordScore > highScore){
       highScore = wordScore;
       word = iword;
    }
  }
  return word;
}