//Modify it to filter out unwanted data inside the callback function.
// Apply a filter operation in the callback function to remove unnecessary data based on certain conditions.

const localUrl = './dummyData.json';
const url = 'https://jsonplaceholder.typicode.com/todos';
const fs = require('fs');


console.log(url)
function fetchPersonData(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}


function requestPersonData(url, callBack) {

    console.log("Requesting data\n");

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            console.log("Fetching data and passing to next .then in chain")
            return response;               //response is an object
        })
        .then(response => response.json())           //object converted to json
        .then(data => callBack(null, data))
        .catch(error => callBack(error, null))

}

requestPersonData(url, fetchPersonData)


//fetching data via local file
function requestPersonData1(url, callBack) {
    console.log("Requesting data from local file")

    fs.readFile(url, 'utf8', (err, data) => {
        if (err) {
            callBack(err, null);
        } else {
            try {
                const jsonData = JSON.parse(data);
                callBack(null, jsonData)
            } catch (error) {
                callBack(error, null);
            }
        }
    })
}

requestPersonData1(localUrl, fetchPersonData)



// Apply a filter operation in the callback function to remove unnecessary data based on certain conditions.
const condition = 'Filter that data from the file that has the length of lastName = 5'
function filterPersonData(condition, url, callBack) {

    console.log("The condition for filtering data - ", condition)
    let length = 5;

    try {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) {
                console.log("Error - ", err)
            } else {
                try {
                    console.log("Fetched");
                    const fetchedData = Object.values(JSON.parse(data));
                    console.log(fetchedData, " Data fetched \n")

                    console.log("\n\n")
                    const conditionalData = fetchedData.filter((person) => {
                        if (person.last_name.length === 5) {
                            return person;
                        }
                    })

                    callBack(null, conditionalData)
                } catch (error) {
                    console.log(error);
                    callBack(error, null)
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

filterPersonData(condition, localUrl, fetchPersonData);