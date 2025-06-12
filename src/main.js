import Typed from "typed.js";
import { cities } from "country-city-location";

const typed = new Typed("#element", {
  strings: ["Halo", "Hola", "Ciao", "Bonjour", "Nǐ hǎo"],
  typeSpeed: 50,
  loop: true,
});

var map = L.map("map").setView([-6.174841638582792, 106.82700398408525], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([-6.174841638582792, 106.82700398408525])
  .addTo(map)
  .bindPopup("Hi")
  .openPopup();

document.getElementById("randomizeBtn").addEventListener("click", () => {
  // Pick a random city
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const { lat, lng, name, country } = randomCity;

  // Move map view
  map.setView([lat, lng], 6);

  // Update marker
  marker.setLatLng([lat, lng]);
  marker
    .bindPopup(
      `I think we are going to<br><strong>${name}, ${country}</strong>`
    )
    .openPopup();
});
