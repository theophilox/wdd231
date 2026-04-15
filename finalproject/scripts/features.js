import {places} from "../data/places.mjs"
console.log(places)


function featurePlaces(places) {
    const featureCards = document.querySelector("#features");
    featureCards.innerHTML = "";
    const filterPlace = places.filter(place => place.star >= 2);
    const random = filterPlace.sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 5);

    selected.forEach((place) => {
        let card = document.createElement("section");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");

        img.setAttribute("src", place.imageUrl);
        img.setAttribute("alt", place.name);
        img.setAttribute("width", "300");
        img.setAttribute("height", "300");
        img.setAttribute("loading", "lazy");
        address.textContent = place.location;
        name.textContent = place.name;
        description.textContent = place.description;

        card.appendChild(figure);
        figure.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        featureCards.appendChild(card);

    });
}


featurePlaces(places);