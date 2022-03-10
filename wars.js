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
