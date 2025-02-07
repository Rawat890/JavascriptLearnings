/* 
Ques 1. What is callBack ?
It is the function that is passed as an argument to another function. The function that takes this function as an argument has the responsibility that when to call the callback function. It is expected to run later as after some operations performed by the main function that is called as the higher order function
Syntax - 
function callBack(args){//code}
function HigherOrder(args, callBack){
      //some operation
      callBack();        //callBack Function called
}

*/


//Example 1.

function toBeCalled(Name) {
    console.log("The name of the caller is " + Name);
}

function greet(greetings, callBack) {
    console.log("Greetings - ", greetings);
    callBack("ALAN")
}

//calling greet
greet("Good Morning", toBeCalled)


//Example 2 - let's fetch the data via the help of callBack
//api taken from json placeholder website

const url = 'https://jsonplaceholder.typicode.com/users';

function fetchData(url, callBack) {
    try {
        fetch(url)
            .then((response) => response.json())
            .then(data => callBack(null, data))
            .catch(error => callBack(error, null))

    } catch (error) {
        console.log("Error - ", error)
        callBack(error, null);
    }
}

function getData(url, callBack) {

    console.log("Fetching the data from the url");
    callBack(url, fetchData)
}

getData(url, (url, fetchDataCallBack) => {
    fetchDataCallBack(url, (error, data) => {
        if (error) {
            console.log("Error-", error);
        } else {
            console.log("Response received - ", data)
        }
    })
});