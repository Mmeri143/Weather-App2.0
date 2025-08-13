function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response) {
  // Display the weather data in the HTML
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png" alt="${response.data.condition.description}" />`;
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchSubmitHandler(event) {
  // Handle the search form submission
  event.preventDefault(); // Prevent the default form submission
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value; // Update the city element
  searchInputElement.value = searchInputElement.value.trim(); // Trim whitespace
  searchInputElement.value = searchInputElement.value.toLowerCase(); // Convert to lowercase
  if (searchInputElement.value === "") {
    alert("Please enter a search term.");
    return;
  }
  searchCity(searchInputElement.value); // Call the searchCity function with the input value
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmitHandler);
searchCity("New York"); // Initial search for New York City
