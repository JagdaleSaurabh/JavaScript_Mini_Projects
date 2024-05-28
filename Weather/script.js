const apikey = "dbd8fb65556a80c18886ce5c69fb20dd";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bengaluru";
const searchbar = document.getElementById("city");
const searchBtn = document.getElementById("search-btn");
const weather = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`
  );

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weather.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weather.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weather.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weather.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchbar.value);
});
