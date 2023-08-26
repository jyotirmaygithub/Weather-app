function updatedweather(cityname) {
  let weather = document.getElementById("weather-for");
  let uppercasecity = cityname;
  weather.innerHTML = uppercasecity[0].toUpperCase() + uppercasecity.slice(1);
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityname}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c6b835283dmsh5d9eb34acc6ca5ap1ed45bjsn5a4937afc575",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    data();
    async function data() {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      //  this below method is different from construtor, here we just need to write id name and then we can acess value from the promise directly by using below syntax
      temp2.innerHTML = result.temp;
      temp.innerHTML = result.temp;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      humidity.innerHTML = result.humidity;
      humidity2.innerHTML = result.humidity;
      cloud_pct.innerHTML = result.cloud_pct;
      feels_like.innerHTML = result.feels_like;
      sunrise.innerHTML = new Date(result.sunrise).toGMTString();
      sunset.innerHTML = new Date(result.sunset).toGMTString();
      wind_speed.innerHTML = result.wind_speed;
      wind_speed2.innerHTML = result.wind_speed;
    }
  } catch (error) {
    console.error(error);
  }
}

let button = document.getElementById("button");
button.addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;
  updatedweather(input);
});

updatedweather("delhi");
