import {places} from "../data/places.mjs"
import { discoverPlaces } from "./destinations.js";


const allButton = document.querySelector("#show-all");
allButton.addEventListener("click", () => {
    discoverPlaces(places);
    });

const natureButton = document.querySelector("#show-nature")

natureButton.addEventListener("click", () => {
    const nature = places.filter(place => place.type === "Nature");
    discoverPlaces(nature);
    });

const historyButton = document.querySelector("#show-history");
historyButton.addEventListener("click", () => {
    const history = places.filter(place => place.type === "History");
    discoverPlaces(history);
    });

const viewpointButton = document.querySelector("#show-viewpoint");
viewpointButton.addEventListener("click", () => {
    const viewpoint = places.filter(place => place.type === "Viewpoints");
    discoverPlaces(viewpoint);
    });