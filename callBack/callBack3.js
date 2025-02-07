//Modify it to filter out unwanted data inside the callback function.
// Apply a filter operation in the callback function to remove unnecessary data based on certain conditions.

const url = './dummyData.json';

//callBack Function
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