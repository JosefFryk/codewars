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
