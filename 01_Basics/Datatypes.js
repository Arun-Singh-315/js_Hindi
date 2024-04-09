// // Primitive 

// //7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// const score = 100 //Number
// const scoreValue = 100.3 //number

// const isLoggedIn = false //boolean
// const OutsideTemp = null // null
// let userEmail; //undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34555565675678678n

// console.log(typeof(bigNumber));

// References (Non - primitive)

// Array, Object, Functions

const heros = ["Shaktiman", "naagraqj", "doga"]

let myObj = {
    name: "hitesh",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}

// Null datatype is Object
//symbol data type is symbol
// type of all non- primitive data type is Object

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object  */



// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

 /* datatypes are based on memory allocation

Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable
 when you declare it */

let userOne = {
    name : "Arun",
    upi : "xxu@ypl"
}

let userTwo = userOne

userTwo.name = "Yash"

console.log(userOne);