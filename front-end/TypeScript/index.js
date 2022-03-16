"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Basic Types
var message = "Hello World";
var id = 5;
var valid;
valid = true;
//Arrays
var arr = [1, 2, 3, 4];
var arr2 = [5, "Hiii", true];
//Tuple
var person = [5, "Hello", true];
var persons = [
    [5, "hello", true],
    [6, "world", false],
];
//Union
var empId = 5;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var emp = {
    id: 1,
    name: "Jhon"
};
//Type Assertion
var cid = 1;
// let custId= <number>cid
var custId = cid;
//Functions
function add(a, b) {
    return a + b;
}
//Void
function log(message) {
    console.log(message);
}
var employee = {
    id: 1,
    name: "Jhon",
    email: "abc@xyz.com"
};
var add2 = function (a, b) { return a + b; };
var Sub = function (a, b) { return a - b; };
// console.log(Sub(5, 6));
//Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        console.log("".concat(this.name, " is now registered"));
    };
    return Person;
}());
var emp1 = new Person(5, "Jhon");
// console.log(emp1);
emp1.register();
var productDetails = /** @class */ (function () {
    function productDetails(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return productDetails;
}());
var p1 = new productDetails(5, "pen", 10);
// console.log(p1);
//Subclasses
var productDescription = /** @class */ (function (_super) {
    __extends(productDescription, _super);
    function productDescription(id, name, price, details) {
        var _this = _super.call(this, id, name, price) || this;
        _this.details = details;
        return _this;
    }
    return productDescription;
}(productDetails));
var p2 = new productDescription(5, "Pen", 10, "Used to Write");
console.log(p2);
//Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["Hello", "World"]);
strArray.push("!!!!!");
