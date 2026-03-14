const display = document.querySelector("#cards");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");


listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");

});
