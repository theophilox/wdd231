import { memberships } from "./benefits.js"
console.log(memberships)

const time = document.querySelector("#timestamp");

time.value = new Date();

const npButton = document.querySelector("#np-button");
const bronzeButton = document.querySelector("#bronze-button");
const silverButton = document.querySelector("#silver-button");
const goldButton = document.querySelector("#gold-button");
const dialogBox = document.querySelector("#dialog-box");
const closeButton = document.querySelector("#close");
const content = document.querySelector("#content");



function membershipDisplay(membership) {
  const info = memberships[membership];
  content.innerHTML = `
    <h3>${info.title}</h3>
    <p><strong>Price:</strong> ${info.price}</p>
    <p><strong>Benefits:</strong></p>
    <ul>
      ${info.benefits.map(b => `<li>${b}</li>`).join('')}
    </ul>
  `;
  dialogBox.showModal();
}

npButton.addEventListener('click', () => membershipDisplay('np'));
bronzeButton.addEventListener('click', () => membershipDisplay('bronze'));
silverButton.addEventListener('click', () => membershipDisplay('silver'));
goldButton.addEventListener('click', () => membershipDisplay('gold'));

closeButton.addEventListener('click', () => {
  dialogBox.close();

})