const navbtn = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');


navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('show');
    navBar.classList.toggle('show');
});
