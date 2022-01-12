//write a function that takes in one string as an argument and return that string with all characters in reverse order

function reverseString(str) {
  let result = []
  let array = [...str]
  console.log(array)
  // let arr = str.split("")
  // console.log(arr)
  for (let i = array.length - 1; i >= 0; i--)
  result.push(array[i])
  console.log(result)
  let reversed = result.join("")
  console.log(reversed)
  return reversed
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: '!dlroW olleH'");
  console.log("=>", reverseString("Hello World!"));

  console.log("Expecting: 'pitter-patter'");
  console.log("=>", reverseString("rettap-rettip"));


  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log(reverseString("figure it out"))
}

module.exports = reverseString;

// Please add your pseudocode to this file
      // initialize an empty array called result
      // turn the string into an array so that I can iterate over each element (each character in the string)
      // push each element into result in reverse order
      // turn the result array back into a string called reversed string 
      // return reversed string

// And a written explanation of your solution
// I need to make my string an array so that I can iterate over it 
// I use the ES6 syntax of the spread operator to take split string into array of characters
// I need to create a new array because I will need an empty array to store elements loop through my original array to create a new reversed array
// If I am working in reverse, I want to start at the end of my array, so I will need to loop through my array starting at the end and going in reverse order until I get to the beginning and store each character as I go
//To loop through backwards, I will uses a for loop. If I was looping in a tradition/forward manner, I would set i = 0 and loop through until I reach array.length. But going backwards and starting at the end of my array, I set i = array.lenth -1 because the index of a array always starts at 0. Basic review, but important to understand. For example, if my array had 4 elements. array1.length would give me 4. The indesis though are 0, 1, 2, 3, 4. Therefore to begin my iteration at the element with an index of 4, I need to use the length of the array and subtract 1
// Now for the rest of my fo loop looks like this: for (let i = arr.length - 1; i >= 0; i--)
// I am decrementing in my loop, instead of the traditional incramenting (i++) so I am subtracting 1 from the index with each loop until I get to the beginning of the array (i >= 0)
//array[i] will represent each element at its respective index as I loop through the array. On the first loop through, array[i] is "4". With each iteration of the loop, I can use the .push() method literally push each element into my new array.
//I will then have a reversed array, which I can turn back into a string 
//I want to return my reversed string


//The split() method in javascript can accept up to two parameters: a separator and a limit. The separator specifies the pattern of how you want your string to be split up, i.e. where each split will be inserted. If you don't include a seperator parameter - .split() - the entire string is returned inside an array, but is not seperated. If you specify an empty string as a the separator - .split("") the string will be split up between every character in your string. 

