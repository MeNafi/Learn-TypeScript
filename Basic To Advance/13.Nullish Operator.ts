/* 
🧐 Nullish Coalescing Operator (??) : Nullish অপারেটর তখনই কাজ করে যখন কোনো ভেরিয়েবলের মান null অথবা undefined হয়। এটি অন্য কোনো "Falsy" মান (যেমন: 0 বা "") কে ইগনোর করে না।

*/

//Example of code

// Example 1: When value is null or undefined
let storeDiscount: number | null = null;
let defaultDiscount = storeDiscount ?? 5; 

console.log(defaultDiscount); // Output: 5 (Because storeDiscount was null)

// Example 2: The importance of ?? over ||
let productStock = 0;

// Logical OR (||) treats 0 as false, so it picks the default
let statusOr = productStock || 10; 
console.log(statusOr); // Output: 10 (Wait! stock is actually 0, not 10)

// Nullish Coalescing (??) treats 0 as a valid value
let statusNullish = productStock ?? 10;
console.log(statusNullish); // Output: 0 (Correct! stock is 0)



/* 

১. এটা কেন দরকার?
= জাভাস্ক্রিপ্টে 0 বা খালি স্ট্রিং ("") কেও "মিথ্যা" বা Falsy ধরা হয়। কিন্তু অনেক সময় 0 আমাদের জন্য একটি প্রয়োজনীয় ডেটা (যেমন: স্টকে ০টি পণ্য আছে)। যদি আমরা || (OR) ব্যবহার করি, তবে 0 থাকলেও সে ডিফল্ট মান নিয়ে নেয়। এই সমস্যা সমাধানের জন্যই ?? ব্যবহার করা হয়।


২. কখন কাজ করে? :  Jokhon ?? শুধুমাত্র তখনই ডান পাশের মানটি নেয় যখন বাম পাশের মানটি:

    i) null হয়

    ii) অথবা undefined হয়


৩. সহজ পার্থক্য : Jhokhon || (OR): বাম পাশে false, 0, "", null, undefined এর যেকোনো একটা পেলেই ডান পাশেরটা নিবে, and ?? (Nullish): বাম পাশে শুধু null বা undefined পেলেই ডান পাশেরটা নিবে। অন্যথায় বাম পাশেরটাই রাখবে।



*/