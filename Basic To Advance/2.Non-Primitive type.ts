/*
Now here is the summery: Non-Primitive Types হলো যখন আমরা একটা ভেরিয়েবলের ভেতর অনেকগুলো ডেটা সাজিয়ে রাখতে চাই।

Point 1 - Arrays (type[]): যখন আপনি একই ধরনের অনেকগুলো জিনিস (যেমন: পণ্যের নাম বা দামের লিস্ট) এক জায়গায় রাখতে চান।

Point 2 - Objects ({}): যখন একটি নির্দিষ্ট জিনিসের বিভিন্ন তথ্য (যেমন: নাম, দাম, ক্যাটাগরি) একসাথে গুছিয়ে রাখতে চান।

Point 3 -Optional Property (?): কোনো তথ্য যদি বাধ্যতামূলক না হয় (যেমন: সব পণ্যে ডিসকাউন্ট থাকে না), তখন আমরা ? চিহ্ন ব্যবহার করি। একে বলে 'Optional'।

Point 4 - Literal Types (|): ক্যাটাগরির ক্ষেত্রে আমরা | ব্যবহার করেছি। এর মানে হলো, ওই ক্যাটাগরিতে আমরা নির্দিষ্ট করে দেওয়া নামের বাইরে অন্য কিছু (যেমন: "Vehicle") লিখতে পারব না।

*/



// Code with example

// string [] means an array of strings that ONLY accepts strings
let products: string[] = ["Rice", "Oil", "Salt"];

//number[] means an array that ONLY accepts numbers
let prices: number[] = [80, 180, 40];

//boolean[] means an array that ONLY accepts boolean values
let isAvailable: boolean[] = [true, false, true];


// 1. Define the shape of the products first (Type Alias)
type Product = {
    name: string;
    price: number;
    category: "grocery" | "electronics" | "cosmetics";   // Union type: only these three categories are allowed
    discount?: number; // Optional property: not every product needs to have a discount

};

// 2. Use the type to create the object
const product1: Product = {
    name: "Rice",
    price: 90,
    category: "grocery",
    //Notice: we didn't include the discount property, and that's perfectly fine because it's optional
};

const product2: Product = {
    name: "Headphones",
    price: 3300,
    category: "electronics",
    discount: 10, // Here we included the optional discount
};




