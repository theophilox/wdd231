const currentTemp = document.querySelector('#current-temp');
const currentMap = document.querySelector('#current-map');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#status');
const currentHumid = document.querySelector('#humidity');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=34.70&lon=138.92&appid=a991c415db6bd5963bbd1fe5722d4d1e&units=metric'


async function currentWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
       
    }

    catch (error) {
        console.error("Weather fetch error:", error)
    
        }   
    
}


function displayResults(data) {

    const weather = document.querySelector('#weather');
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `${data.main.temp}<span class="unit">&deg;C</span>`;
    captionDesc.textContent = desc;
}

currentWeather();