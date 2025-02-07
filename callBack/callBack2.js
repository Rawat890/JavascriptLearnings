/*Here are 20 questions to help you practice using callbacks with API calls (especially focusing on the fetch function):*/

// Basic Fetch with Callback

// Write a function that fetches data from a given API URL using fetch and passes the response data to a callback function.

//Goal: Fetch data from an API and check for successful HTTP status codes (200-299). If the status code is outside this range, pass an error message to the callback.



const coinUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin';

function fetchCoinData(url, callBack) {
    try {
        fetch(url)
            .then((response) => {
                console.log("I am passing the data to next then and this property is chaining")
                if (!response.ok) {
                    throw new Error('Network response was not ok -' + response.status);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => callBack(null, data))
            .catch(error => callBack(error.message, null));

    } catch (error) {
        console.log("Error- ", error)
        callBack(error, null)
    }
}



function getCoinData(url, callBack) {
    console.log("Fetching data from server -")
    callBack(url, fetchCoinData);
}


getCoinData(coinUrl, (url, fetchCoinDataCallBack) => {
    fetchCoinData(url, (error, data) => {
        if (error) {
            console.log("Error - ", error);
        } else {
            console.log(data)
        }
    })
})




//Handling JSON Response -Fetch data from an API and parse the JSON response inside the callback before passing it to the callback.
const catUrl = 'https://catfact.ninja/fact';

function fetchAndHandleJson(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}


function getCatData(url, callBack) {
    console.log("Fetching data")

    try {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("The response is not recorded " + response.status)
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                const parseData = {
                    fact: data.fact, length: data.length
                }
                callBack(null, parseData)
            })
            .catch(error => callBack(error, null))


    } catch (error) {
        console.log(error);
        callBack(error, null);
    }
}

getCatData(catUrl, fetchAndHandleJson)



