const map = L.map('map').setView([0, 0], 2);
//latitude longitude zoom passed

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//marker to map the position on the map
const marker = L.marker([0, 0]).addTo(map);   //adds marker to map

navigator.geolocation.getCurrentPosition(function (pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    //method in this library - setLatLng([latitude, longitude])
    marker.setLatLng([latitude, longitude]).update();
    //update method
    map.setView([latitude, longitude], 13);

    marker.bindPopup('<strong>Hello everyone`</strong> <br> This is my location').openPopup();
})