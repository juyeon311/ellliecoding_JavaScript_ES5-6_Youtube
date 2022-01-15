//This is pink comment!
// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';


// 2. Variable
// let (added in ES6)
// inside block {} = Block scope
let globalName = 'global name';

{
    let name = 'ellie'
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
age = 4;
var age;

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types 
// primitve, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function 
// ` = this is backtic
const count = 17; // integer
const size = 17.1; // decimal number 
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const nagativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(nagativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string) 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// template literals (string) 
// `원하는 스트링 ${변수의 값}` = 원하는 스트링 변수의 값 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals → MDN에 나와있는 template literals에 대한 설명 
// template literals를 사용하지 않게 되면 어떻게 될까? (비교)
// template literals를 사용했을 때
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// template literals를 사용하지 않았을 때
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined 
let x; 
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// symbol, create unique identifiers for objects 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure 
const ellie = { name: 'ellie', age: 20};

// 5. Dynamic typing: dynamically typed language 
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
console.log(text.charAt(0)); // Uncaught TypeError: text.charAt is not a function

