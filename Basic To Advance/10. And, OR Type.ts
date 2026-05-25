/* 
Union Types (|) — "অর" (OR) : Union টাইপ মানে হলো একটি ভেরিয়েবল একাধিক ধরনের (Types) ডেটা গ্রহণ করতে পারে। এটি পাইপ (|) চিহ্ন দিয়ে প্রকাশ করা হয়।

*/

//Example of code
// Union: User can pay using only these specific strings
type TPaymentMethod = "bkash" | "rocket" | "nagad" | "mcash";

let payment: TPaymentMethod = "bkash"; // ✅ Valid
// payment = "visa"; // ❌ Error: "visa" is not allowed in TPaymentMethod

// Another Example: String or Number
let userId: string | number;
userId = "A101"; // ✅ Valid
userId = 505;    // ✅ Valid





/* 
Intersection Types (&) — "অ্যান্ড" (AND) : Intersection মানে হলো দুটি আলাদা টাইপকে জোড়া লাগিয়ে একটি নতুন টাইপ বানানো। এটি অ্যামপারস্যান্ড (&) চিহ্ন দিয়ে প্রকাশ করা হয়।

*/

//Example of code
type TStoreOwner = {
    ownerName: string;
    experience: number;
};

type TStoreDetails = {
    storeName: string;
    location: string;
};

// Intersection: Combining both types into one
type TFullStoreInfo = TStoreOwner & TStoreDetails;

const myStore: TFullStoreInfo = {
    ownerName: "Abir",
    experience: 5,
    storeName: "Abir Gadgets",
    location: "Dhaka"
};