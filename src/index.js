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
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmitHandler);
