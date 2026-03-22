const eventsUrl = 'data/events.json';
const eventList= document.querySelector('#event-list');

const getEventData = async() => {
    try {
        const response = await fetch(eventsUrl);
        const data = await response.json();
        displayEvents(data.events)
       
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getEventData();

const displayEvents = (events) => {

    events.forEach(event => {

        const info = document.createElement('p')

        info.innerHTML = `<strong>${event.where}</strong> - ${event.what} ${event.when}`

        eventList.appendChild(info);
        
    });
    


}