// Problem 1 solution

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));



// Problem 2 solution

function reverseString(value: string){
    return value.split("").reverse().join("");
}

console.log('"'+ reverseString("typescript") + '"');

//Problem 3 solution

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

console.log(checkType("Hello")); 
console.log(checkType(42));   


//Problem 4 solution

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: '"' + "John Doe" + '"', age: 21  };
console.log(getProperty(user, "name")); 


//Problem 5 solution

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {...book,isRead: true};
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));


//Problem 6 solution

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return ` ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student('"' + "Name: Alice", 20, "A" + '"');
console.log(student.getDetails());


//Problem 7 solution

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(item => arr2.includes(item));
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); 

