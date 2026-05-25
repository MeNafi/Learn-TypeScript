/* 
টাইপস্ক্রিপ্টে keyof অপারেটরটি খুবই চমৎকার। এটি কোনো একটি Interface বা Type থেকে তার সবকটি প্রপার্টির নাম (Keys) সংগ্রহ করে একটি নতুন টাইপ তৈরি করে।

সহজ কথায়: keyof একটি অবজেক্টের সব চাবির (Keys) একটা লিস্ট তৈরি করে দেয়।

*/

//Example of code

// Scenario : ধরুন, আপনার কাছে একটি Book ইন্টারফেস আছে। আপনি চাচ্ছেন এমন একটি টাইপ যা শুধু ওই বইয়ের প্রপার্টিগুলোর নাম গ্রহণ করবে।

interface IBook {
    title: string;
    author: string;
    price: number;
}

// keyof ব্যবহার করে আমরা IBook এর সব প্রপার্টি নামের একটি ইউনিয়ন টাইপ পেলাম
// এর মানে হলো: type BookKeys = "title" | "author" | "price"
type BookKeys = keyof IBook;

let myKey: BookKeys;

myKey = "title";  // ✅ সঠিক
myKey = "author"; // ✅ সঠিক
// myKey = "rating"; // ❌ Error: কারণ 'rating' নামে কোনো কী IBook-এ নেই


//Example of code for function

// For Function : বাস্তব উদাহরণ (ফাংশনে ব্যবহার) - সবচেয়ে বেশি এটি ব্যবহৃত হয় যখন আমরা কোনো অবজেক্ট থেকে ডাইনামিকভাবে ভ্যালু আনতে চাই:

function getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const myUser = {
    id: 101,
    userName: "MeNafi",
    email: "nafi@diu.edu.bd"
};

// এখানে টাইপস্ক্রিপ্ট জানে যে 'userName' এই অবজেক্টের একটি ভ্যালিড কি (key)
const myName = getPropertyValue(myUser, "userName"); 

// const age = getPropertyValue(myUser, "age"); // ❌ Error দিবে, কারণ age নেই


/* 

Code Overview:

১. T কী? : T হলো পুরো Object-টি। যেমন আপনার উদাহরণে myUser অবজেক্টটি হলো T।

২. K extends keyof T কী? : এটিই সবচেয়ে গুরুত্বপূর্ণ অংশ।

So, keyof T মানে হলো myUser অবজেক্টের সব চাবি বা কী-গুলোর একটি লিস্ট (যেমন: "id" | "userName" | "email")।

 and K extends ... মানে হলো, দ্বিতীয় প্যারামিটার হিসেবে আপনি যা পাঠাবেন (key), তাকে অবশ্যই ওই লিস্টের ভেতরে থাকতে হবে।


/*


/* 

সহজ সারাংশ:
  
   i) Keyof: কোনো অবজেক্ট বা ইন্টারফেসের সব প্রপার্টি বা "কী" (Keys) গুলোকে নিয়ে একটি সেট তৈরি করে।

   ii) কেন ব্যবহার করবেন?: যাতে ভুল করে আমরা অবজেক্টে নেই এমন কোনো প্রপার্টি এক্সেস করতে না চাই। এটি আমাদের স্পেলিং মিস্টেক বা ভুল কী (Key) ব্যবহার করা থেকে বাঁচায়।
 
সহজ টেকনিক: keyof মানে হলো— "এই অবজেক্টের ভেতরে কী কী চাবি আছে, তার একটি লিস্ট দাও।"

*/