function displayResponse(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    autoStart: true,
    delay: 20,
  });
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayResponse);
