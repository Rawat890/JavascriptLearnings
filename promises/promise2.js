const promise1 = new Promise((resolve, reject) => {
    // resolve("I am resolved promise 1 ")
    reject("I am resolved promise 1")
});

promise1.then((data) => console.log(data))
promise1.catch((error) => console.log(error))

const promise2 = new Promise((resolve, reject) => {
    reject("I am rejected promise 2 ")
});
promise2.then((data) => console.log(data))
promise2.catch((error) => console.log(error))

async function getData() {

    try {
        const data1 = await promise1;
        console.log(data1)
        const data2 = await promise2;
        console.log(data2)
    } catch (error) {
        console.log(error)
    }
}









getData();