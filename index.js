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
        console.log(details)
    }
}