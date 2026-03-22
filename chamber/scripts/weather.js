const currentTemp = document.querySelector('#current-temp');
const currentMap = document.querySelector('#current-map');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#status');
const currentHumid = document.querySelector('#humidity');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=14.29&lon=120.79&appid=a991c415db6bd5963bbd1fe5722d4d1e&units=metric'



async function apiFetch() {
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
    
        }   
    
}


function displayResults(data) {


    let desc = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    currentHumid.innerHTML = `${data.main.humidity}%`
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();