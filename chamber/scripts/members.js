const url = 'data/members.json';
const cards = document.querySelector('#cards');


const getMembersData = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
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
        let website = document.createElement('a');
        let medal = document.createElement('img');
        let header = document.createElement('div');

        medal.classList.add('medal');

        if (member.membershipLevel == 3) {

            medal.setAttribute('src',"images/gold-medal.svg");
            medal.setAttribute('alt',"gold medal")
        
        }
        else if (member.membershipLevel == 2) {
            medal.setAttribute('src',"images/silver-medal.svg");
            medal.setAttribute('alt',"silver medal")
        }

        else {
            medal.setAttribute('src',"images/bronze-medal.svg");
            medal.setAttribute('alt',"bronze medal")
        }
        
        name.textContent = `${member.name}`;

        logo.setAttribute("src", member.img);
        logo.setAttribute("alt", `Portrait of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "340");
        logo.setAttribute("height", "400");
        logo.classList.add("members-icon");

        address.textContent = `${member.address}`;
        contact.textContent = `${member.phone}`;
        website.setAttribute("href",member.url);
        website.textContent = `Click to Visit the website`;
        

        header.appendChild(medal);
        header.appendChild(name);
        
        card.appendChild(header);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(website);
        cards.appendChild(card);


    });

}




