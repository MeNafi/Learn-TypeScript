/*
রেস্ট অপারেটর (Rest Operator - ...): মনে করুন, আপনার দোকানে একজন কাস্টমার অনেকগুলো পণ্য নিয়ে আসলো। আপনি জানেন না সে ৫টি আনবে নাকি ১০টি। এই "সবগুলো" সংখ্যাকে একসাথে একটি ব্যাগে (Array) ভরার কাজটাই করে ... (Rest Operator)।

*/ 

// 4. REST OPERATOR 
// Goal: A customer buys many things. We don't know how many! 
// '...items' collects all numbers into one list (array).

function sumAllOrders(...items: number[]): number {
    return items.reduce((total, current) => total + current, 0);
    //.reduce()  এটি একটি ক্যালকুলেটরের মতো কাজ করে। লিস্টের প্রথম থেকে শেষ পর্যন্ত সব সংখ্যাকে একটির পর একটি যোগ করে মোট ফলাফল বের করে দেয়।
}

// Logic: User can pass 2, 3, or 100 prices.
console.log(sumAllOrders(100, 200, 50)); // Output: 350