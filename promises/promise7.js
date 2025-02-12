const promise1 = () => new Promise(function (resolve, reject) {
    // resolve('I am resolved promise 1 ')
    reject("Error")
})
    .then((data) => {
        return data.json();
    })
    .catch((error) => {

        return error;
    })


const promise2 = () => new Promise(function (resolve, reject) {
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


const promise3 = () => new Promise(function (resolve, reject) {
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



// console.log(promise1)
// console.log(promise2)
// console.log(promise3)



const pr = Promise.all([promise1, promise2, promise3])
pr.then((data) => {
    setTimeout(() => {
        console.log("all wait for all promises whether they are resolved or reject")
        console.log(data)
        console.log(pr)
    }, 1000);

})
    .catch((error) => {
        console.log("all wait for all promises whether they are resolved or reject")
        console.error(error)
    })




/*
Promise.allSettled([promise1, promise2, promise3])
    .then((data) => {
        setTimeout(() => {
            console.log("allSettled wait for all promises whether they are resolved or reject")
            console.log(data)
        }, 2000)

    })
    .catch((error) => {
        console.log("I wait for all promises whether they are resolved or reject")
        console.error(error)
    })

Promise.race([promise1, promise2, promise3])
    .then((data) => {
        setTimeout(() => {
            console.log("race return the first promise result that is resolved or rejected")
            console.log(data)
        }, 3000)

    })
    .catch((error) => {
        console.log("race return the first promise result that is resolved or rejected")
        console.error(error)
    })

Promise.any([promise1, promise2, promise3])
    .then((data) => {

        setTimeout(() => {
            console.log("any return the first settled resolved promise")
            console.log(data)
        }, 4000);

    })
    .catch((error) => {
        console.log("any return the first settled resolved promise")
        console.error(error)
    })


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

}*/




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


// try {

//     const d1 = promise1;
//     d1.then((data) => console.log(data))
//         .catch((error) => console.error(error))
//     const d2 = promise2;
//     d2.then((data) => console.log(data))
//         .catch((error) => console.log(error))
// } catch (error) {
//     console.log(error)
// }