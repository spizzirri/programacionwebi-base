function addSeriesSection() {
  // Create a new section element
  // Create the text "New series"
  // Append the series content to the series element
  // Append the section element to the body

  let seriesSection = document.querySelector(".js-series");
  let titleElement = document.createElement("h2");
  let titleContent = document.createTextNode("New series");

  titleElement.appendChild(titleContent);
  seriesSection.appendChild(titleElement);
}

function seriesSection() {
  // Remove the series section from the body
  let button = document.querySelector(".js-remove-series");

  button.addEventListener("click", (event) => {
    console.log("click", event);
    event.preventDefault();

    let seriesSection = document.querySelector(".js-series");
    let title = seriesSection.querySelector("h2");

    seriesSection.removeChild(title);
  });
}

addSeriesSection();
seriesSection();
