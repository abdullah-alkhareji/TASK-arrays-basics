const emptyArray = [];
let hobbies = [
	"playing video games",
	"watching Movies",
	"riding bicycle",
	"chatting",
	"coding",
	"road trips",
];
const numbers = [2, 7, 5, 1, 9];
console.log(`6-  ${numbers[1]}`);
console.log(`7-  ${numbers[numbers.length - 1]}`);
hobbies.push("swimming");
console.log(`9-  ${hobbies[hobbies.length - 1]}`);
console.log(`10- ${hobbies.length}`);

hobbies.pop();
hobbies.pop();
console.log(`12- ${hobbies.length}`);
console.log(`13- ${hobbies}`);

// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);
// console.log(hobbies[3]);
// console.log(hobbies[4]);

hobbies = [];
console.log(hobbies);
