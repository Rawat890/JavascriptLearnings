const promise = new Promise((res, rej) => {
    throw 'hey';
})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

const promise1 = new Promise((res, rej) => {
    rej("Error occurred")
})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))




//Here there are 2 scenarios given - In 2st we are using throw and reject to catch error
//In 2nd we are using both in setTimeOut
//When we use throw in setTimeOut -- it throws an error of trace uncaught
new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Second Promise');
    }, 100)
}).catch(function (e) {
    console.log(e);
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        throw 'First Promise';
    }, 100)
}).catch(function (e) {
    console.log(e);
});