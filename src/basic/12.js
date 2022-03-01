// Collections :: STREAMS
let list = ["delhi", "calcutta", "mumbai", "pune", "bangalore"];

// Approache 1
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

console.log("------------------------------------------------------");

// Approach 2
for (let item of list) {
  console.log(item);
}

console.log("------------------------------------------------------");
// Approache 3 :: arrow function
list.forEach((item) => console.log(item));

// REACT
list.map();
list.filter();
