function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatequote(event) {
  event.preventDefault();
  let searchFieldInput = document.querySelector("#search-field");
  let apiKey = "o214a6c6f6d2f53a6749b30tbf45c1ef";
  let prompt = `Retrieve a quote that includes the word ${searchFieldInput.value}`;
  let context =
    "Be polite and provide a very short and accurate answer in HTML format, placing the author of the quote in a separated <div> with the class author";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let holdingMessage = document.querySelector("#quote");
  holdingMessage.innerHTML = `<div class="blink">Generating...</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", generatequote);
