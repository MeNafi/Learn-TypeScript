/*
Type Alias হচ্ছে টাইপস্ক্রিপ্টের একটি চমৎকার ফিচার। এটি অনেকটা একটি "Custom Template" বা ছাঁচের মতো। আপনি একবার একটি টাইপ তৈরি করে রাখলে, সেটি পুরো কোডে বারবার ব্যবহার করতে পারবেন।

 Standard naming convention অনুযায়ী আমরা নামের আগে 'T' ব্যবহার
*/

// ১. প্রথমে আমরা একটি 'Template' বা ছাঁচ বানালাম
// Standard naming convention অনুযায়ী আমরা নামের আগে 'T' ব্যবহার করতে পারি (TProduct)
type TProduct = {
    productName: string;
    price: number;
    isAvailable?: boolean; // আমরা চাইলে একটি ঐচ্ছিক (optional means ? is a ternary operator)প্রপার্টিও রাখতে পারি
};

// ২. এখন এই ছাঁচ ব্যবহার করে আমরা নতুন পণ্য (Object) বানাবো
const item1: TProduct = {
    productName: "Water Bottle",
    price: 20,
    isAvailable: true
};

const item2: TProduct = {
    productName: "School Bag",
    price: 500
    // এখানে isAvailable না দিলেও ভুল ধরবে না, কারণ এটি ঐচ্ছিক (?)
};

console.log(item1.productName); // Output: Water Bottle