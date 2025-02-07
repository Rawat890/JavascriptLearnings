/*Web apis are also called as the browser apis that is provided by the browser to access those functionalities which is not in the range of javascript. It act as a bridge to communicate with the browser and to perform various types of functionalities*/

//Geolocation api - This api is used to get the access to the location of the user using the website and obviously after the user gives the permission

console.log(document)
console.log(window)

//getCurrentPosition() method of Geolocation interface that is used to get the current position of the device
//Syntax = getCurrentPosition(success, error, options)
//success - a callback function that takes GeoLocation object as its sole input
//error - an optional callback function that takes GeoLocationError object as its sole input
//options - a object that can include maximumAge, timeout etc

const targetToReach = {
    latitude: 31.7123132,
    longitude: 75.923143
}


function currentPosition(pos) {
    console.log(pos)

    const coords = pos.coords;
    console.log(`Latitude: ${coords.latitude}`)
    console.log(`Longitude: ${coords.longitude}`)
    console.log(`Within: ${coords.accuracy} meters`)
}
function currentError(err) {
    console.log(`${error.code} - ${error.message}`)
}

const options = {
    enableHighAccuracy: true, //use gps if available
    timeout: 5000,  //time to wait to stop trying for the location
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(currentPosition, currentError, options);


/*Geolocation.getCurrentPosition(): Retrieves the device's current location.
Geolocation.watchPosition(): Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.*/

const watchOptions = {
    enableHighAccuracy: true, //use gps if available
    timeout: 5000,  //time to wait to stop trying for the location
    maximumAge: 0
};

function watchCurrentPosition(pos) {
    const coords = pos.coords;
    console.log(pos)

    if (targetToReach.latitude === coords.latitude && targetToReach.longitude === coords.longitude) {
        console.log("You have reached the position")
    }
}
function watchCurrentPositionError(error) {
    console.log(`${error.code} - ${error.message}`)
}

navigator.geolocation.watchPosition(watchCurrentPosition, watchCurrentPositionError, watchOptions)