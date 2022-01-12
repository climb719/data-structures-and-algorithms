//Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.
//Write a function that takes in one array as an argument, find the first occurance of a duplicate and return it.
//If there is not a duplicate in the array, return -1

function findFirstDuplicate(arr) {
  let arrSet = new Set()
  for (let i= 0; i < arr.length; i++) {
    if (arrSet.has(arr[i])) return arr[i]
     arrSet.add(arr[i])
  }
  return -1
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate(["a", "b", "c", "d"]));

  console.log("Expecting: 7");
  console.log("=>", findFirstDuplicate([7, 7, 7]));

// provided test cases
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
//initialize an empty Set object as a place to store unique values as I iterate 
//iterate through the array/input 
//check on every loop through the array add it to the set if it is not there yet
//if it is there, I found the dublicate and return it
//if I get to the end of the array and have not found a duplicate, return -1

// And a written explanation of your solution
//The Set constructor allows for creating Set objects that store unique values.
//additionally it gives me access to two other methods set.has() set.add()
//I can initialize an empty set object and then iterate through my array/input to check for duplicates and check or add to my set object
// therefore I am creating my set object as I go and checking for duplicates
//if the the current element of my array I am looking at on one pass of my loop is in my Set already .has() 
//I have found my first duplicate, if it is not there yet, I add it and keep looking through unitl I either
//find an element that is already thee (my duplicate) or if I reach the end of my input arry and have not found a duplicate
//I can return whatever I want, in this case -1