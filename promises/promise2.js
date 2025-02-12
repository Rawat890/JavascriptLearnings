
//Normal call Back
//Here in getData we are passing a callback function, so it is the responsibility of the getData to call it ir not. It may be possible that it may call it 2 or 3 times or may be not, so here the control over the program is gone and this can be risky. To avoid this Promises come into play

const url = 'https://jsonplaceholder.typicode.com/users/4';

function getData(url, callBack) {

    fetch(url)
        .then(function (response) {
            console.log("I am 1st then handler of fetch api")
            return response.json();
        })
        .then(function (data) {
            console.log("I am 2nd then handler of fetch api")
            callBack(null, data);
        })
        .catch(function (error) {
            console.log(error.message)
            console.log(error.name)
            callBack(error, null);
        })
}

function fetchData(error, data) {

    if (error) {
        error = new Error("Unable to fetch data")
        console.log(error)
    } else {
        console.log("Received data - ")
        console.log(data)
    }
}

getData(url, fetchData);


//Now let's handle the situation via promise

//here the getData returns a promise and that is stored as promise object

const promise = getData1(url);
function getData1(url) {

    const pr = new Promise((resolve, reject) => {

        fetch(url)
            .then(function (response) {
                console.log("I am 1st then handler of fetch api")
                return response.json();
            })
            .then(function (data) {
                console.log("I am 2nd then handler of fetch api")
                console.log("Data received-")
                resolve(data);
            })
            .catch(function (error) {
                console.log(error.message)
                console.log(error.name)
                error = new Error('Unable to fetch data')
                reject(error);
            })

    })

    return pr;

}


//Here after promise is resolved or rejecting we are attaching the callback and promise guarantees that it will run 100% and only once
promise.then(function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data);
    }
})