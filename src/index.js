//function formatDate() {
//let days = [
//"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday",
//];
//let day = days[currentTime.getDay()];
//let date = currentTime.getDate();
//if (date < 10) {
// date = `0${date}`;
//}
//let hour = currentTime.getHours();
//if (hour < 10) {
// hour = `0${hour}`;
//}
// let minutes = currentTime.getMinutes();
// if (minutes < 10) {
// minutes = `0${minutes}`;
//}
//return `${day}, ${date}, ${hour}:${minutes}`;
//}
//let h2 = document.querySelector("#todays-date-and-time");
//let currentTime = new Date();
//h2.innerHTML = formatDate(currentTime);

//function showTemperature(response) {
// let descriptionElement = document.querySelector("#description");
//descriptionElement.innerHTML = response.data.weather[0].description;
//document.querySelector("h1").innerHTML = response.data.name;
// document.querySelector("#main-temp").innerHTML = `${Math.round(
// response.data.main.temp
//)}º`;
//let iconElement = document.querySelector("#icon");
//iconElement.setAttribute(
//  "src"`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
//);
//}

let apiKey = "720611257f683e4c21c243913abd2051";
let city = "Portland";
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Portland&appid${apiKey}`;
console.log(apiUrl);

// let city = document.querySelector("#city-search").value;

//function showInput(event) {
//  event.preventDefault();
// axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
//}

//let input = document.querySelector("form");
//input.addEventListener("submit", showInput);
