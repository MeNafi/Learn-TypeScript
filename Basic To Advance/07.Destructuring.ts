/*
ডিস্ট্রাকচারিং (Destructuring) : একটি বড় বক্স (Object) থেকে শুধু প্রয়োজনীয় জিনিসগুলো বের করে আনা। যেমন: কাস্টমারের অনেক তথ্য থাকতে পারে, কিন্তু আপনার শুধু তার নাম আর শহর দরকার। ডিস্ট্রাকচারিং ব্যবহার করলে পুরো অবজেক্ট বারবার টাইপ করতে হয় না।

*/

// 6. DESTRUCTURING 
// Goal: Easily taking out info from a big object.

const customer = {
    fullName: "Rahat",
    city: "Dhaka",
    phone: 1711223344
};

// Instead of writing customer.fullName, customer.city...
// We do this:

const { fullName, city } = customer;

console.log(fullName);   // Output: Rahat