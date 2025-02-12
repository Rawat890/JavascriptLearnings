const promise1 = new Promise(function (resolve, reject) {
    // resolve('I am resolved promise 1 ')
    reject('I am rejected promise 1 ')
})
    .then((data) => {
        return data.json();
    })
    .catch((error) => {

        return error;
    })


const promise2 = new Promise(function (resolve, reject) {
    // resolve('I am resolved promise 2 ')
    const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
    resolve(data)

    // reject('I am rejected promise 2 ')
})
    .then((data) => {
        return data.json();

    })
    .catch((error) => {

        return error;
    })


const promise3 = new Promise(function (resolve, reject) {
    // resolve('I am resolved promise 3')
    const data = fetch('https://jsonplaceholder.typicode.com/users/3');
    resolve(data)
    // reject('I am rejected promise 3')
})
    .then((data) => {
        return data.json();
    })
    .catch((error) => {

        return error;
    })



// console.log(promise1())
// console.log(promise2)
// console.log(promise3)



// const pr = Promise.all([promise1, promise2, promise3])
// pr.then((data) => {
//     console.log(data)
// })
//     .catch((error) => {
//         console.log(error)
//     })


async function getData() {

    try {
        const d1 = await promise1;
        console.log(d1)
    } catch (error) {
        console.log(error)
    }

    try {
        const d2 = await promise2;
        console.log(d2)
    } catch (error) {
        console.log(error)
    }

    try {
        const d3 = await promise3;
        console.log(d3)
    } catch (error) {
        console.log(error)
    }

    // const d1 = await promise1;
    // console.log(d1)
    // const d2 = await promise2;
    // console.log(d2)
    // const d3 = await promise3;
    // console.log(d3)

}




try {
    async function getData() {
        const d1 = await promise1;
        console.log(d1)
        const d2 = await promise2;
        console.log(d2)
        const d3 = await promise3;
        console.log(d3)
    }
    getData();
} catch (error) {
    console.error(error)
}