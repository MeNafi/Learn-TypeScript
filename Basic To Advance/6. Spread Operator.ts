/* 
স্প্রেড অপারেটর (Spread Operator - ...) : এটি অনেকটা কপি-পেস্টের মতো। আপনার কাছে একটা লিস্ট আছে, সেটাকে কপি করে অন্য একটা বড় লিস্টের ভেতর ঢুকিয়ে দিতে চাইলে আপনি ... ব্যবহার করবেন।

*/

// 5. SPREAD OPERATOR
// Goal: We have an old list and we want to add new items to a new list.

let oldStock: string[] = ["Rice", "Salt"];
let newStock: string[] = [...oldStock, "Sugar", "Oil"]; 

// Logic: newStock now has ["Rice", "Salt", "Sugar", "Oil"]
console.log(newStock);