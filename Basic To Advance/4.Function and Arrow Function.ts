/*
(Functions) : টাইপস্ক্রিপ্টে ফাংশন হলো একটি মেশিনের মতো। আপনি মেশিনে কী ইনপুট দিচ্ছেন (যেমন: number) এবং মেশিন আপনাকে কী আউটপুট দিবে, সেটা আগে থেকেই নিশ্চিত করা থাকে। এতে ভুল হওয়ার চান্স থাকে না।

*/ 

// 3. FUNCTIONS 
// Goal: Calculate price based on how many pieces someone buys

function calculatePrice(price: number, quantity: number): number {
    return price * quantity;
}

// Logic: 10 taka * 5 pieces = 50
console.log(calculatePrice(10, 5));


//Arrow Function
const calculatePriceArrow = (price: number, quantity: number): number => {
    return price * quantity;
};

// Logic: 20 taka * 2 pieces = 40
console.log(calculatePriceArrow(20, 2));
