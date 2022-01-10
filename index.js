// 3. Create an empty array `emptyArray`
const emptyArray = [];

// 4. Create an array `hobbies`, add 6 hobbies to it
let hobbies = [
	"playing video games",
	"watching Movies",
	"riding bicycle",
	"chatting",
	"coding",
	"road trips",
];

// 5. Create an array `numbers`, add your favorite 5 numbers
const numbers = [2, 7, 5, 1, 9];

// 6. Print out the second number from the array `numbers`
console.log(numbers[1]);

// 7. Print out the last hobby from the array `hobbies`
console.log(hobbies[hobbies.length - 1]);

// 8. Add a fake hobby to the end of the array `hobbies`
hobbies.push("swimming");

// 9. Print the last hobby
console.log(hobbies[hobbies.length - 1]);

// 10. Print the length of array `hobbies`
console.log(hobbies.length);

// 11. Remove the last 2 hobbies from array `hobbies`
hobbies.splice(-2, 2);

// 12. Print length of `hobbies`
console.log(hobbies.length);

// 13. Print every element in hobbies in a single line
// console.log(hobbies);

console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(hobbies[3]);
console.log(hobbies[4]);

// 14. Empty the array `hobbies`
hobbies = [];
console.log(hobbies);
