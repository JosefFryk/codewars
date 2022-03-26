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



// Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value.
//  The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
function twoSum(numbers, target) {
  for (var i=0; i<numbers.length;i++) {
    for (var j=1; j<numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i,j];
      }
    }
  }
}

// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
//  Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word){
  let chars=[...word.toLowerCase()];
  let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
  let duplicateSet = new Set(duplicateList); 
  let uniqueDuplicateList = [...duplicateSet];
  let resultString = "";
  for (let i=0, n=chars.length; i < n; ++i ) {
    if(uniqueDuplicateList.includes(chars[i])) {
      resultString += ")";
    } else {
      resultString += "(";
    }
  }
  return resultString;
}

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.
// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. 
//Furthermore the percent of loss increases by a fixed 0.5 percent at the end of every two months.
// Can you help him? Our man finds it difficult to make all these calculations.
// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {

  if (startPriceOld >= startPriceNew) {
    return [0, Math.floor(startPriceOld - startPriceNew)];
  }
  
  let months = 0;
  let totalSaving = 0;
  let depreciatedPriceNew = startPriceNew;
  let depreciatedPriceOld = startPriceOld;
  let lossPercentage = percentLossByMonth; 
  while ((totalSaving + depreciatedPriceOld) < depreciatedPriceNew) {
    months += 1;
    if (months % 2 === 0) {
      lossPercentage += 0.5; 
    }
    totalSaving += savingperMonth;
    depreciatedPriceOld -= depreciatedPriceOld * (lossPercentage / 100);
    depreciatedPriceNew -= depreciatedPriceNew * (lossPercentage / 100);
  }
  return [months, Math.round(totalSaving + depreciatedPriceOld - depreciatedPriceNew)];
}


// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
function towerBuilder(floors){
  let space,star, tower = [];
  for(i = 1; i <= floors; i++){
    space = " ".repeat(floors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

// Are they the "same"?
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
//  with the same multiplicities (the multiplicity of a member is the number of times it appears). 
//  "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
const comp = (a1, a2) => {
  if (!a1 || !a2 || a1.length !== a2.length) return false;
  return a1.map(x => x * x).sort().toString() === a2.sort().toString();
}

// Given a list and a number, create a new list that contains each number of lst at most N times without reordering.
//  For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
//   drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3]. With list [20,37,20,21] and number 1, 
//   the result would be [20,37,21].
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}