const currentTemp = document.querySelector('#current-temp');
const currentMap = document.querySelector('#current-map');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&appid=a991c415db6bd5963bbd1fe5722d4d1e&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
       
    }

    catch (error) {
    
        }   
    
}

function displayResults(data) {


    let desc = data.weather[0].description;
    currentMap.innerHTML = `${data.name}`
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();