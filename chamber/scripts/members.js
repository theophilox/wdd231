const url = 'data/members.json';
const cards = document.querySelector('#cards');

const getMembersData = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.members);
        displayMembers(data.members);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let url = document.createElement('a');

        name.textContent = `${member.name}`;

        logo.setAttribute("src", member.img);
        logo.setAttribute("alt", `Portrait of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "340");
        logo.setAttribute("height", "400");

        address.textContent = `${member.address}`;
        contact.textContent = `${member.phone}`;
        url.setAttribute("href",member.url);
        url.textContent = `${member.url}`

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(url);
        cards.appendChild(card);


    });

}