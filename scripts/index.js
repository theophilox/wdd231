const navbtn = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;

navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('show');
    navBar.classList.toggle('show');
});
