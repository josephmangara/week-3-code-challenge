document.addEventListener("DOMContentLoaded", function () {
    getMovies();
});

function getMovies() {
    fetch("https://my-json-server.typicode.com/josephmangara/week-3-code-challenge/films")
        .then(res => res.json())
        .then(data => {
            displayMovieDetails(data);
            // Display details of the first film upon loading
            if (data.length > 0) {
                let rand = Math.floor(Math.random() * data.length);
                displayFilmDetails(data[rand]);
            }
        });
}

function displayMovieDetails(data) {
    let list = document.getElementById("films");
    list.innerHTML = ''; // Clear existing list
    for (let details of data) {
        let li = document.createElement('li');
        li.textContent = details.title;
        li.addEventListener("click", () => displayFilmDetails(details));
        list.appendChild(li);
    }
}

function displayFilmDetails(details) {
    let purchaseTickets = document.getElementById("purchaseTickets");
    purchaseTickets.innerHTML = `
    <ul id="films">
      <img src="${details.poster}">
      <p>${details.title}</p>
      <p>Description: ${details.description}</p>
      <p>Runtime: ${details.runtime}</p>
      <p>Showtime: ${details.showtime}</p>
      <p id="availableTickets">Available tickets: ${details.capacity - details.tickets_sold}</p>
      <button id="buyTicket">Buy Ticket</button>
      <p id="soldOutMessage" style="color: brown;"></p>
    </ul>`;

    let buyTicketButton = document.getElementById("buyTicket");
    let availableTickets = document.getElementById("availableTickets");

    buyTicketButton.addEventListener("click", () => {
        if (details.tickets_sold < details.capacity) {
            details.tickets_sold++;
            availableTickets.textContent = `Available tickets: ${details.capacity - details.tickets_sold}`;
        } else if (details.tickets_sold === details.capacity) {
            // availableTickets.textContent = "Sold out!";
            document.getElementById("soldOutMessage").textContent = "Sold out!";
        }
    });
}
