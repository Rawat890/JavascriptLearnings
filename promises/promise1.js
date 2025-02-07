/*
Ques 1. What is promise ? 
Promise is a simple way to handle the asynchronous requests. 
It is an object that represents eventual completion or failure of the asynchronous requests and is returns a promise that resolves to a value in future after getting data or gets rejected

syntax-
const promise = ()=> new Promise((resolve, reject)=>{
    //code})

resolve is the function that is passed as the parameter in the promise constructor that is used settle the promise when it resolves promise to some value
reject is the function that is passed as the parameter in the promise constructor that is used settle the promise when the promise is not resolved
*/

//example 1
const promise1 = new Promise((resolve, reject) => {
    return resolve("Promise resolved")
})
const promise2 = new Promise((resolve, reject) => {
    return reject("Promise rejected")
})
console.log(promise1)
console.log(promise2)

promise1
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg))
promise2
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg))

