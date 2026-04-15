import {places} from "../data/places.mjs";
import { displayModal } from "./modal.js";


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
    message = "Back so soon! Check out all beautiful destinations!";
  } else if (daysDiff === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysDiff} days ago.`;
  }
}

visitMessage.textContent = message;

localStorage.setItem("lastVisit", now);


export function discoverPlaces(places) {
    const featureCards = document.querySelector("#destinations");
    featureCards.innerHTML = "";

    places.forEach((place) => {
        let card = document.createElement("section");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let stars = document.createElement("span");
        

        img.setAttribute("src", place.imageUrl);
        img.setAttribute("alt", place.name);
        img.setAttribute("width", "300");
        img.setAttribute("height", "300");
        img.setAttribute("loading", "lazy");
        address.textContent = place.location;
        name.textContent = place.name;
        description.textContent = place.description;
        stars.textContent = "⭐".repeat(place.star);

        card.appendChild(figure);
        figure.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(stars)
        card.addEventListener("click", () => {
            displayModal(place);

        });
        featureCards.appendChild(card);

    });
}


discoverPlaces(places);