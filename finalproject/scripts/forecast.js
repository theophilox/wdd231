const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=14.29&lon=120.79&appid=a991c415db6bd5963bbd1fe5722d4d1e&units=metric'

async function forecastWeather() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const forecastData = await response.json();

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

  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  let count = 0;

  data.list.forEach(item => {
    if (item.dt_txt.includes("12:00:00") && count < 3) {

      const date = new Date(item.dt_txt);
      const dayName = days[date.getDay()];
      const temp = item.main.temp;

      const card = document.createElement("div");
      card.classList.add("forecast-card");

      card.innerHTML = `<p><strong>${dayName}</strong>: ${temp}&deg;C</p>
      `;

      container.appendChild(card);

      count++;
    }
  });
}