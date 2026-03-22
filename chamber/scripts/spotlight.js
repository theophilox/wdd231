const url = 'data/members.json';
const spotlight = document.querySelector('#spotlight');

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


const spotlightMembers = (members) => {
    members.forEach((member) => {