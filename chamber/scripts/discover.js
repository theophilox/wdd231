import {places} from "../data/places.mjs"
console.log(places)


const visitMessage = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const lastVisitTime = parseInt(lastVisit);
  const timeDiff = now - lastVisitTime;

  const oneDay = 86400000;
  const daysDiff = Math.floor(timeDiff / oneDay);

  if (daysDiff < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysDiff} days ago.`;
  }
}

visitMessage.textContent = message;

localStorage.setItem("lastVisit", now);


function displayPlaces(places) {
    const discoverCards = document.querySelector("#discover-cards");
    discoverCards.innerHTML = "";
    places.forEach((place) => {
        let card = document.createElement("section");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");

        img.setAttribute("src", place.photo);
        img.setAttribute("alt", place.name);
        img.setAttribute("width", "300");
        img.setAttribute("height", "300");
        img.setAttribute("loading", "lazy");
        address.textContent = place.location;
        name.textContent = place.name;
        description.textContent = place.description;
        button.textContent = "Learn More";
        button.setAttribute("id", "discover-button");

        card.appendChild(figure);
        figure.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        discoverCards.appendChild(card);

    });
}

displayPlaces(places);