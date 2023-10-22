// It starts with creating a GET request to load in details of the movies. 

document.addEventListener("DOMContentLoaded", function (){
    getMovies()
});

function getMovies(){
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data => {
        displayMovieDetails(data)
    })
}
//this function creates a list of all the films based on their title. 
function displayMovieDetails(data){
    for (let details of data){
        console.log(details);
        let list = document.getElementById("films");
        let li = document.createElement('li');
        li.textContent = details.title;
        li.addEventListener("click", () => displayFilmDetails(details));
        list.appendChild(li);

    }
}

// This function displays all movie details upon clicking the movie title.
function displayFilmDetails(details){
    let purchaseTickets = document.getElementById("purchaseTickets");
    purchaseTickets.innerHTML =`
    <ul id="films">
      <img src="${details.poster}">
      <p>${details.title}</p>
      <p>Description: ${details.description}</p>
      <p>Runtime: ${details.runtime}</p>
      <p>Showtime: ${details.showtime}</p>
      <p>Capacity: ${details.capacity}</p>
      <p>Tickets_sold: ${details.tickets_sold}</p>
      <button id="buyTicket">Buy Ticket</button>
    </ul>
    `;
    let buyTicketButton = document.getElementById("buyTicket");
    buyTicketButton.addEventListener("click", () => {
        if(details.tickets_sold < details.capacity){
        return details.tickets_sold++;
       }else if(details.tickets_sold === details.capacity){return "Sold out!";}
    })
}
// create a buy ticket button for each film.
// function buyTicket(){}
// let buyTicketButton = document.createElement('button');
//     buyTicketButton.textContent ="Buy Ticket";
//  buyTicketButton.addEventListener("click", () => increaseTicketsSold(details));
//  li.appendChild(buyTicketButton);
