//What will happen if you pass a callback function to setTimeout() but forget to specify the delay time?
//Answer - The default value is 0 thus it will run as soon as possible after the synchronous script completes its execution

function add(x, y) {
    console.log("The sum is ", x + y)
}

setTimeout(function () {
    add(4, 6);
});



//What is the result if you call a callback inside a loop in a non-async function? Will it run multiple times or just once?
function printName() {
    console.log("Rohan Rawat")
}

function getData(index, callBack) {
    for (let i = index; i < 10; i++) {
        callBack();
    }
}

getData(0, printName)    //callback will be executed multiple times

function processItem(item, callback) {
    console.log(`Processing: ${item}`);
    callback(item);
}

const items = [1, 2, 3, 4, 5];

for (let i = 0; i < items.length; i++) {
    processItem(items[i], (item) => {
        console.log(`Callback called with: ${item}`);
    });
}


/*  Flow -
processItem(1, callback) is called.
console.log('Processing: 1') is executed and logs: Processing: 1.
callback(1) is called.
The flow goes to the callback function: (item) => { console.log('Callback called with: 1') }.
console.log('Callback called with: 1') is executed and logs: Callback called with: 1*/


//If you pass a function that calls a callback to setInterval(), and the callback itself throws an error, what happens to the interval?
function errorCallback(val) {
    if (!val) {
        throw new Error("Error found")
    }
}


setInterval(() => {
    errorCallback(0)
})

function errorCallback(val) {
    try {
        if (!val) {
            throw new Error("Error found");
        }
    } catch (error) {
        console.log(error)
    }

}
/*
let count = 0;
const intervalId = setInterval(() => {
    try {
        errorCallback(0);  // This will throw an error
    } catch (error) {
        console.log("Caught an error:", error.message);
    }
    count++;
    console.log("Interval run count:", count);

    if (count >= 5) {
        clearInterval(intervalId);  // Stops the interval after 5 runs
    }
}, 1000);
*/


//What happens if you pass a callback to a function that is designed to execute asynchronously but you forget to invoke the callback?
//Ans - the callBack function code will not get executed

function callBackToPass() {
    for (let i = 0; i < 10; i++) {
        console.log(i + 1)
    }
}
function asyncFunction(callBackToPass) {
    setTimeout(() => {
        console.log("I am asynchronous function")
    }, 1000);
}

asyncFunction(callBackToPass);


function asyncFunction1(callback) {
    setTimeout(() => {
        console.log("Async task is done!");
    }, 1000);
}

asyncFunction1((result) => {
    console.log("Callback received:", result);
});
