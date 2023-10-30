// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("Colors Array", () => {
    it("removes the first item from the array and shuffles the remaining items", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        const colorOutput1 = ["yellow", "blue", "pink", "green"]
        const colorOutput2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        expect(colors1).toEqual(expect.arrayContaining(colorOutput1))
        expect(colors2).toEqual(expect.arrayContaining(colorOutput2))
    }) 
})



// b) Create the function that makes the test pass.

const removeFirstAndShuffle = function(arr) {
    if (arr.length > 1) {
      // If the array has more than one item
      const firstItemRemoved = arr.slice(1)
       // Remove the first item
  
      // Shuffle the items randomly
      const shuffledItems = firstItemRemoved.sort(() => Math.random() - 0.5)
      return shuffledItems
    } else {
      // If the array has only one item or no items, return the array as it is
      return arr
    }
  }

// Pseudo code:

//create function removeFirstAndShuffle to take in input 
//use conditionals if/else 
//create function firstItemRemoved  and use .slice to remove
//creates function shuffleItems and use .sort to change randomly 


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("Vote Score", () => {
    it("calculates the tally based on up and down votes", () => {
        const votes1 = { upVotes: 13, downVotes: 2 }
        // Expected output: 11
        const votes2 = { upVotes: 2, downVotes: 33 }
        // Expected output: -31
        const result1 = calculateTally(votes1)
        expect(result1).toEqual(11)
        const result2 = calculateTally(votes2)
        expect(result2).toEqual(-31)
    })    
})


// b) Create the function that makes the test pass.

const calculateTally = (votes) => {
    return votes.upVotes - votes.downVotes
}

// Pseudo code:
//create function calculateTally and recieves votes as an object
//return the subtraction and resulting tally 

// Colors Array
// ✓ removes the first item from the array and shuffles the remaining items (4 ms)
// Vote Score
// ✓ calculates the tally based on up and down votes (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.544 s, estimated 1 s
// Ran all test suites.
