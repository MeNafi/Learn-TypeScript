/* 
1. Nullable Types : Nullable মানে হলো যখন একটি ভেরিয়েবলের মান থাকতেও পারে, আবার নাও থাকতে পারে (অর্থাৎ null হতে পারে)। এটি সাধারণত Union Type (|) ব্যবহার করে করা হয়।

*/

//Example of code Nullable Types

// এখানে searchName স্ট্রিংও হতে পারে, আবার খালি (null) ও হতে পারে
const searchName = (name: string | null) => {
    if (name) {
        console.log(`Searching for ${name}`);
    } else {
        console.log("Nothing to search!");
    }
};

searchName("Rice"); // Output: Searching for Rice
searchName(null);   // Output: Nothing to search!


//সহজ কথা: যখন আপনি নিশ্চিত নন যে ইউজার কোনো তথ্য দিবে কি না, তখন টাইপ হিসেবে string | null ব্যবহার করাকে Nullable বলে।


// ১. Nullable কেন দরকার? : কখনো কখনো ডাটাবেজ থেকে কোনো তথ্য না-ও আসতে পারে। তখন সেই ভেরিয়েবলটিকে শুধু string না লিখে string | null লিখলে টাইপস্ক্রিপ্ট আপনাকে মনে করিয়ে দিবে যে— "ভাই, এটা কিন্তু খালি হতে পারে, তাই আগে চেক করে নাও!"






//Start Unknown Type Here


/* 

2. Unknown Type : unknown টাইপটি অনেকটা any এর মতো, কিন্তু অনেক বেশি নিরাপদ। এটি আমাদের বলে— "আমি জানি না এখানে কী ডেটা আসবে, তাই এটি ব্যবহার করার আগে তোমাকে অবশ্যই চেক করে নিতে হবে।"

*/

//Example of code Unknown Type
let myInput: unknown;

myInput = "Hello";
myInput = 10;

// সরাসরি কাজ করতে দিবে না (Error দিবে)
// console.log(myInput.trim()); 

// আগে চেক করে নিতে হবে (Type Guard)
if (typeof myInput === "string") {
    console.log(myInput.trim()); // এখন এটি নিরাপদ এবং কাজ করবে!
}


/* 

2. Unknown বনাম Any

     i) any: এটি সবচেয়ে বিপজ্জনক। এটি ব্যবহার করলে টাইপস্ক্রিপ্ট কোনো ভুল ধরবে না, যা পরে কোড ক্র্যাশ করাতে পারে। (একে বলা হয় "Wildcard")

    ii) unknown: এটি অনেক বেশি সতর্ক। এটি আপনাকে বলবে— "আমি জানি না এটা কী, আগে নিশ্চিত হও এটা string নাকি number, তারপর কাজ করো।"


*/


// Start Never Type Here

/*  

3. Never Type :

TypeScript-এ never টাইপটি একটু অদ্ভুত কিন্তু খুব শক্তিশালী। এটি এমন একটি টাইপ যা দিয়ে বোঝানো হয়— "এই জিনিসটি কখনোই ঘটবে না" অথবা "এই ফাংশনটি কখনোই কোনো কিছু রিটার্ন করবে না।"

🚫 The never Type
সাধারণত আমরা দুই ধরনের ক্ষেত্রে never ব্যবহার করি:

   1. যখন কোনো ফাংশন একটি এরর (Error) থ্রো করে এবং মাঝপথেই থেমে যায়।

   2. যখন কোনো ফাংশন ইনফিনিট লুপে (Infinite Loop) আটকে যায় এবং কখনোই শেষ হয় না।

*/


//Example of code Never Type

// ১. এই ফাংশনটি কখনোই কিছু রিটার্ন করবে না কারণ এটি একটি Error দিয়ে কোড থামিয়ে দেয়
function handleCriticalError(msg: string): never {
    throw new Error(msg);
}

// ২. ইনফিনিট লুপের ক্ষেত্রে (এটি চিরকাল চলবে, তাই এটি 'never' ফিরে আসবে না)
const infiniteLoop = (): never => {
    while (true) {
        console.log("I will never stop!");
    }
};

// Logic: handleCriticalError("Something went wrong!");




/*   

4. Now Summery

   a) Nullable: যখন ডেটা 'খালি' বা null হতে পারে।

   b) Unknown: যখন আপনি ডেটা টাইপ সম্পর্কে একদমই নিশ্চিত নন এবং ব্যবহারের আগে চেক করতে চান।

   c) Never: যখন কোনো ফাংশন কখনোই কোনো কিছু রিটার্ন করে না। সাধারণত এরর থ্রো (Error throw) করলে বা ইনফিনিট লুপের ক্ষেত্রে এটি ব্যবহৃত হয়।


*/