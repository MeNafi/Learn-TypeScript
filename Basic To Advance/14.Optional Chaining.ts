/* 

Optional Chaining (?.) : যদি কোনো অবজেক্টের ভেতরে কোনো প্রপার্টি না থাকে (অর্থাৎ null বা undefined হয়), তবে সাধারণ জাভাস্ক্রিপ্ট কোড এরর দেয় এবং পুরো অ্যাপ বন্ধ হয়ে যায়। ?. ব্যবহার করলে এরর না দিয়ে সেটি শুধু undefined রিটার্ন করে।


১. এটা কেন দরকার? : রিয়েল লাইফ প্রজেক্টে অনেক সময় এপিআই (API) থেকে ডেটা আসতে দেরি হয় বা কিছু তথ্য খালি থাকে। যদি আমরা সরাসরি সেই তথ্য এক্সেস করতে চাই এবং সেটি না থাকে, তবে আমাদের ওয়েবসাইটটি বন্ধ (Crash) হয়ে যাবে। ?. সেই ক্র্যাশ হওয়া থেকে আমাদের বাঁচায়।

২. এটা কীভাবে কাজ করে? : Jokhon ?. চেক করে যে বাম পাশের জিনিসটি (যেমন: address) কি আসলে আছে?

    i) যদি থাকে, তবে সে ডট (.) এর পরের অংশে যায়।

    ii) যদি না থাকে, তবে সে আর সামনে আগায় না এবং শান্তভাবে undefined বলে দেয়।

৩. Nullish Coalescing এর সাথে ব্যবহার: সাধারণত আমরা ?. এবং ?? একসাথে ব্যবহার করি যেন undefined এর বদলে একটি সুন্দর মেসেজ দেখানো যায়।

*/



// Example of code

/* Scenario: Online Shop Customer Profile
Real-life Example - Customer Profile, ধরে নিন একটি অনলাইন শপে কাস্টমারের প্রোফাইল আছে। কিছু কাস্টমার তাদের পুরো ঠিকানা দেয়, আবার কেউ দেয় না।

*/

type TCustomer = {
    name: string;
    contact?: {
        phone?: number;
        email?: string;
    };
};

const customerWithPhone: TCustomer = {
    name: "Abir",
    contact: {
        phone: 1711223344
    }
};

const guestCustomer: TCustomer = {
    name: "Unknown Guest"
    // No contact info provided
};

// --- Optional Chaining in action ---

// কাস্টমার ১ এর ফোন নম্বর খুঁজছি
const phone1 = customerWithPhone.contact?.phone; 
console.log(phone1); // Output: 1711223344

// গেস্ট কাস্টমারের ফোন নম্বর খুঁজছি (যিনি ফোন নম্বর দেননি)
const phone2 = guestCustomer.contact?.phone; 
console.log(phone2); // Output: undefined (Error দিবে না!)


// --- Optional Chaining + Nullish Coalescing (Best Combo) ---

// যদি ফোন নম্বর না থাকে, তবে একটি মেসেজ দেখাবো
const finalPhone = guestCustomer.contact?.phone ?? "No phone provided";

console.log(finalPhone); // Output: "No phone provided"







