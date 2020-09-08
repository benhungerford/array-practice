// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function myFunction(str, i) {
  let arr = [];
  arr.length = i;
  const length = arr.length;
  for (var j = 0; j < length; j++) {
    arr[j] = str;
  }
  return arr;
}

console.log(myFunction('eight', 8));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

const test = [1, 2, 3, 4];

function reverseArray(arr) {
  reverse = arr.reverse();
  return reverse;
}

console.log(test);
console.log(reverseArray(test));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

const thisArray = ['', 'this', 0, 'function', false, 'works']

function removeFalsy(arr) {
  arr = arr.filter(function(n) {
    return (n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && isNaN() != NaN);
  });
  return arr;
};

console.log(removeFalsy(thisArray));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

// const myArray = [
//   ['name', 'Charlie'],
//   ['color', 'brown'],
//   ['age', 10]
// ];
//
// function newArray(arr) {
//
//   return object;
// };

// console.log(newArray(myArray));





// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

const elements = ['A', 'B', 'A', 'C', 'B'];

function removeDuplicates(arr) {
  let newArray = [...new Set(arr)];
  return newArray
}

console.log(removeDuplicates(elements));

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

let list1 = [1,2,3]
let list2 = [1,2,3]
//sort to be in the same order
//
function comparison(a, b) {
  for (let i = 0, i < a.length, i++){

  }
};


console.log(comparison(list1, list2));





// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------









// -----------------------------------------------
