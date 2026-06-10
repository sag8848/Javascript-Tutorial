// javascript learning

var a = 5;
var b = 6;
var c = (a = b);
console.log("the value of c is:" + c);

// conditional statement (if/else and nested if)

// if-else
var age = 20;
if (age < 20) {
  console.log("you are under for voting");
} else {
  console.log("you are eligible for voting");
}

// if-else, else-if

var num = 0;

if (num > 0) {
  console.log("the number is positive");
} else if (num > 0) {
  console.log("the number is Negative");
} else {
  console.log("the number is Zero");
}

// nested if

var hasCitizenship = false;
var age = 20;

if (age >= 20) {
  if (hasCitizenship == true) {
    console.log("you are eligible for Voting");
  } else {
    console.log("you have to bring citizenship to cast the vote");
  }
} else {
  console.log("you are under age");
}

// Switch

var day = "monday";

switch (day) {
  case "sunday":
    console.log("sunday is holiday");
    break;

  default:
    console.log("Today is working days");
    break;
}

// for loop and while loop

for (let i = 0; i < 10; i++) {
  console.log("ram");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// finding sum from 0 to 10
let count = 0;
for (let i = 0; i < 10; i++) {
  count = count + i;
}
console.log(count);

// printing the number from array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

// while loop

let i = 5;

while (i < 10) {
  console.log(i);
  i++;
}

let j = 5;
let sum = 0;

while (j < 10) {
  sum = sum + j;
  j++;
}
console.log(sum);

// Template literal

const name = "Sagar Acharya";
const Grade = 3.8;
const roll_no = 1;

console.log(
  `my name is ${name} and i have scored ${Grade} on my final exam and my roll.no is ${roll_no}`);


//   object destructuring

let products = {
    name: "Apple",
    Category: "Fuji",
    price: 320,
    broughtFrom: "Mustang"
}

let {name:Name, Category} = products;
console.log(Name);


// array destructuring

let subject = ["Math", "Science", "Social", "Nepali0"]

let [first, second, third, fourth] = subject;

console.log(first)
console.log(second)
console.log(third)

// spread operator

let product = {
    names: "Apple",
    Categorys: "Fuji",
    prices: 320,
    broughtFroms: "Mustang"
}

let nextProduct = {
   name: "Banana",
    Category: "Gopal",
    price: 300,
    broughtFrom: "Bagmati" 
}

let finalProduct = {...product, ...nextProduct};
console.log(finalProduct);

// combine destructuring and spread operator

let {names, Categorys, ...restProduct} = product;


let production= {...restProduct, ...nextProduct};

console.log(production);

// Map

let marks = [23, 45, 78, 94, 96, 100, 101]
let mappingMark = marks.map((value)=> value+10);
console.log(mappingMark);

// find and Filter
let gadget = [{
    name: "hp victus",
    category: "Laptop",
    price: 95000
},
{
 name: "acer nitro",
    category: "Laptop",
    price: 100000   
},
{
name: "Iphone 17 pro max",
    category: "Smartphone",
    price: 244000  
} 
]
// find
let findingGadget = gadget.find((gadget)=> gadget.name == "hp victus");
console.log(findingGadget);

// filter
let filteredProduct = gadget.filter((gadget)=> gadget.price>=100000);
console.log(filteredProduct);


// more example for map, filter and find

let fruits = [
    {
        name: "Apple",
        season: "Winter",
        price: 320,
        producedRegion: "Mustang"
}, 
{
        name: "Banana",
        season: "all-season",
        price: 240,
        producedRegion: "terai"
}, 
{
        name: "Orange",
        season: "Winter",
        price: 150,
        producedRegion: "Gorkha"
}, 
{
        name: "Water-Melon",
        season: "Summer",
        price: 180,
        producedRegion: "Kamala"
}
]

// map

let vatAmount = fruits.map((fruits) => fruits.price + (fruits.price *13) / 100);
console.log(vatAmount);

// find

let findFruit = fruits.find((fruits) => fruits.name == "Water-Melon");
console.log(findFruit);

// filter
 let filterFruit = fruits.filter((fruits) => fruits.price > 150);
console.log(filterFruit);