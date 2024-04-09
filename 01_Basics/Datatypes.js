// Primitive 

//7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100 //Number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const OutsideTemp = null // null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34555565675678678n

console.log(typeof(bigNumber));

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