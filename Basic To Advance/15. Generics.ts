/* 
Generics হলো টাইপস্ক্রিপ্টের এমন একটি পাওয়ার যা আপনাকে "Reusable" কোড লিখতে সাহায্য করে। অর্থাৎ, আপনি একটি ফাংশন বা টাইপ একবার লিখবেন, কিন্তু সেটি বিভিন্ন ধরনের ডেটার (string, number, object) সাথে ব্যবহার করা যাবে।

🧬 Generics (সহজ উদাহরণ) bhabe bolle জেনেরিক্সকে একটি "খালি খাপ বা কন্টেইনার" হিসেবে চিন্তা করুন, যেখানে আপনি যে ধরনের জিনিস রাখবেন, সেটির টাইপ তেমনই হয়ে যাবে।


*/

//Example of code
function identity<T>(value:T):T{
    return value;
}

const paracetamol = identity("Nope")

console.log(typeof paracetamol);


/* 

১. কেন ব্যবহার করব? (The Problem) : যদি আমরা জেনেরিক্স ব্যবহার না করতাম, তবে আমাদের string এর জন্য একটি ফাংশন, number এর জন্য আলাদা ফাংশন লিখতে হতো। অথবা আমাদের any ব্যবহার করতে হতো। কিন্তু any ব্যবহার করলে টাইপ সেফটি থাকে না। জেনেরিক্স আমাদের টাইপ সেফটি এবং রিইউজেবিলিটি দুটোই দেয়।

২. <T> এর মানে কী? : এই <T> হলো একটি Type Parameter। যখন আমরা ফাংশনটি কল করি (যেমন: createArray<string>), তখন T এর জায়গায় string বসে যায়। এটি অনেকটা ফাংশনের প্যারামিটারের মতো, কিন্তু এটি ভ্যালুর বদলে টাইপ নিয়ে কাজ করে।

৩. জেনেরিক ইন্টারফেস : আপনি শুধু ফাংশন নয়, ইন্টারফেসেও জেনেরিক্স ব্যবহার করতে পারেন:

*/


//Example of code Generic Interface
interface GenericResponse<T> {
    status: number;
    data: T;
}

const response: GenericResponse<{id: number}> = {  // also use GenericResponse<string[]>
    status: 200,
    data: { id: 1 }
   // data: ["apple", "banana", "orange"]        //  when we use GenericResponse<string[]>
};



/* 

 Summery :

 i) Generics: এটি এমন একটি ব্যবস্থা যা দিয়ে আপনি ডাইনামিক বা রিইউজেবল কোড লিখতে পারেন।

 ii) সুবিধা: একই ফাংশন বা ক্লাস দিয়ে ভিন্ন ভিন্ন টাইপের ডেটা হ্যান্ডেল করা যায় কোনো এরর ছাড়াই।

 iii) চিহ্ন: এটি মূলত এঙ্গেল ব্র্যাকেট < > এবং এর ভেতরে একটি অক্ষর (যেমন: <T>) দিয়ে প্রকাশ কiiরা হয়।

*/