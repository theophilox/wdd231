export function displayModal(place) {
    const destinationModal = document.querySelector("#modal");
    destinationModal.innerHTML = "";
    destinationModal.innerHTML = `
        <h2>${place.name}</h2>
        <h3>${place.type}</h3>
        <p>${"⭐".repeat(Number(place.star) || 0)}</p>
        <img src="${place.imageUrl}" alt="${place.name}">
        <p>${place.description}</p>
        <address>${place.location}</address>
        
        <button id="closeModal">Close</button>
    `;

    destinationModal.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        destinationModal.close();
    });
}