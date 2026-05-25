/*  ⚡ Ternary Operator (টারনারি অপারেটর)

এটি মূলত if-else কন্ডিশনের একটি ছোট বা শর্টকাট ভার্সন। একে "One-liner if-else" ও বলা হয়।

টারনারি অপারেটর তিনটি অংশ নিয়ে কাজ করে:

Condition: যেটি আপনি চেক করতে চান।

Expression 1: যদি কন্ডিশন সত্য (true) হয়, তবে এটি কাজ করবে।

Expression 2: যদি কন্ডিশন মিথ্যা (false) হয়, তবে এটি কাজ করবে।

*/


//Example of code
const stock = 0;

const ProductStatus = stock > 0 ? "Available" : "Out of Stock";

console.log(ProductStatus); // Output: "Out of Stock" 