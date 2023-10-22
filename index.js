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

function displayMovieDetails(data){
    for (let details of data){
        console.log(details);
        let list = document.getElementById("moviedetails");
        let li = document.createElement('li');
        li.textContent = details.title;
        li.addEventListener("click", () => displayFilmDetails(details));
        list.appendChild(li);
    }
}

// This function displays all movie details upon clicking the movie title.
function displayFilmDetails(details){
    purchaseTickets.innerHTML =`
    <h2 id="moviedetails">${details.title}</h2>
    <p>capacity: ${details.capacity}</p>
    <p>description: ${details.description}</p>
    <img src="${details.image}">
    <p>runtime: ${details.runtime}</p>
    <p>showtime: ${details.showtime}</p>
    <p>tickets_sold: ${details.tickets_sold}</p>
    <p></p>
    `
}
