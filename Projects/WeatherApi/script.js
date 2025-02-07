
const date = document.querySelector('.date')
const city = document.querySelector('.city')
const searchIcon = document.querySelector('.searchIcon')
const weatherImg = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const temperatureMax = document.querySelector('.highValue')
const temperatureMin = document.querySelector('.lowValue')
const description = document.querySelector('.typeOfWeather')

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dateObj = new Date();
console.log(dateObj)

//current Month
let month = months[dateObj.getMonth()];
console.log(month)

//current day
let day = dateObj.getDate();
console.log(day)

//current year
let year = dateObj.getFullYear();
console.log(year)

date.innerHTML = `${month} ${day}, ${year}`;


const apiKey = `378625208a4a8917e69b5a7351a6bf55`;
// const city1 = 'Chennai';

const app = document.querySelector('.app');
const getWeatherDetails = async () => {
    try {
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`, {
            headers: {
                Accept: "application/json"
            }
        })

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);
        city.innerHTML = `${weatherData.name}`
        description.innerHTML = `${weatherData.weather[0].description}`
        weatherImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;

        temperature.innerHTML = `<h2>${Math.round(weatherData.main.temp)}</h2>`;

    } catch (error) {
        console.log(error)
    }
}

getWeatherDetails();