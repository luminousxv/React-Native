// const hello = 'world';
// let hello = 'korea';

// if (true) {
//     const hello = 'korea';
//     console.log(hello);
// }

// test();

// console.log(hello);

// const num = 5;

// num =6 ;

// console.log(num);

// object
// const drinks = {};
// drinks.dcaffe = 'latte';
// drinks.lemon = 'ade';

// console.log(drinks);

//array
// const arr = [1, 2, 3, 4, 5];
// arr[0] = 100;
// arr[4] = 500;
// console.log(arr);

//string literal

// const val01 = 'Hello';
// const val02 = 'World';
// // const val03 = val01 + ' ' + val02 + '!!!!';
// // console.log(val03);

// //`${variable}`

// const litVal = `${val01} ${val02}!!!!`;
// console.log(litVal);

//for ... of ..
// let array = [10, 20, 30, 40];

// for (let val of array) {
//     console.log(val);
//     // console.log(array[val]);
// }

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (let val in obj) {
//     console.log(val);
//     // console.log(array[val]);
// }

//Rest Operator

// function printNums(num1, ...num2) {
//     console.log(num1, num2);
// }

// printNums(1,2,3,4,5);

//Spread Operator

// function sum (x, y, z) {
//     return x+y+z;
// }

// console.log(sum(1, 2, 3));

// let arr = [10, 20, 30];
// console.log(sum(arr));
// console.log(sum.apply(null, arr));
// console.log(sum(...arr));

// function sum (a, b, c, d, e) {
//     return a+b+c+d+e;
// }

// let arr = [20, 30];

// console.log (
//     sum(10, ...arr, 40, 50)
// );

// let face = ['eyes', 'nose', 'mouth'];
// let head = ['hair', ...face, 'ears'];

// console.log(head);

// let arr = [1, 2, 3]
// let arrCpy = [...arr];

// console.log(arrCpy);

// let drinks = {
//     caffe: 'latte',
//     coca: 'coca'
// }

// let newDrinks = {
//     lemon: 'tea',
//     oragne: 'jucie',
//     ...drinks
// }

// console.log(newDrinks);

//Arrow Function

// let arr = [1, 2, 3, 4, 5];

// let twice = arr.map(v=>v*2);
// let twice = arr.map(function(val){
//     return val*2;
// })

// let twice = arr.map(v=>{
//     if (v % 2 === 0){
//         console.log('even number')
//     } else{
//         console.log('odd number')
//     }
// });

// console.log(twice);

// let arr = [10, 20, 30, 40, 50];

// let twice = arr.map((v, i)=>{
//     console.log(`i: ${i}, v: ${v}`)
// });

// Class

class Person {
    constructor(region_, gender_) {
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'an-yeong') {
        console.log(val);
    }
}

// let korean = new Person('Korea', 'male');
// console.log(korean);

// korean.gender = 'female';
// console.log(korean);

// korean.greetings();

class American extends Person {
    constructor(region_, gender_, language_){
        super(region_, gender_);
        this.language_ = language_;
    }

    greetings(val = 'hello') {
        console.log(val);
    }
}

let american = new American('USA', 'female', 'English');
console.log(american);

american.greetings();