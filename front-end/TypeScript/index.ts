import { type } from "os";

export {};
//Basic Types
let message: string = "Hello World";
let id: number = 5;
let valid: boolean;
valid = true;

//Arrays
let arr: number[] = [1, 2, 3, 4];
let arr2: any[] = [5, "Hiii", true];

//Tuple

let person: [number, string, boolean] = [5, "Hello", true];
let persons: [number, string, boolean][] = [
  [5, "hello", true],
  [6, "world", false],
];

//Union

let empId: number | string = 5;

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects

type Emp = {
  id: number;
  name: string;
};

let emp: Emp = {
  id: 1,
  name: "Jhon",
};

//Type Assertion

let cid: any = 1;
// let custId= <number>cid
let custId = cid as number;

//Functions

function add(a: number, b: number): number {
  return a + b;
}

//Void

function log(message: string): void {
  console.log(message);
}
// log("Hello World");

//Interface

interface Employee {
  id: number;
  name: string;
}
interface Employee {
  email: string;
}

let employee: Employee = {
  id: 1,
  name: "Jhon",
  email: "abc@xyz.com",
};

//Functional Interface

interface MathFunc {
  (x: number, y: number): number;
}

let add2: MathFunc = (a: number, b: number): number => a + b;
let Sub: MathFunc = (a: number, b: number): number => a - b;

// console.log(Sub(5, 6));

//Classes

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    console.log(`${this.name} is now registered`);
  }
}

const emp1 = new Person(5, "Jhon");
// console.log(emp1);

emp1.register();

//Class Interface

interface ProductInterface {
  id: number;
  name: string;
  price?: number;
}

class productDetails implements ProductInterface {
  id: number;
  name: string;
  price?: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const p1 = new productDetails(5, "pen", 10);
// console.log(p1);

//Subclasses

class productDescription extends productDetails {
  details: string;
  constructor(id: number, name: string, price: number, details: string) {
    super(id, name, price);
    this.details = details;
  }
}

const p2 = new productDescription(5, "Pen", 10, "Used to Write");
console.log(p2);

//Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Hello", "World"]);

strArray.push("!!!!!");
