const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=34.70&lon=138.92&appid=a991c415db6bd5963bbd1fe5722d4d1e&units=metric'

async function forecastWeather() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData)

            displayForecast(forecastData)
        }
        else {
            throw Error(await response.text());
        }
       
    }

    catch (error) {
    
        }   
    
}


forecastWeather();

function displayForecast(data) {
  const container = document.querySelector("#forecast");
  container.innerHTML = "";

  const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let count = 0;

  data.list.forEach(item => {
    if (item.dt_txt.includes("00:00:00") && count < 3) {

      const date = new Date(item.dt_txt);
      const dayName = days[date.getDay()];
      const temp = item.main.temp;
      const icon = item.weather[0].icon;
      const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
      const desc= item.weather[0].description;

      const card = document.createElement("div");
      card.classList.add("forecast-card");

      card.innerHTML = `<p><strong>${dayName}</strong></p>
      <div class="forecast-weather"><img src="${iconSrc}" alt="${desc}"> <p>${temp}<span class="unit">&deg;C</span></p></div>
      `;

      container.appendChild(card);

      count++;
    }
  });
}