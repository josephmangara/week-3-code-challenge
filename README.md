# week-3-code-challenge
Flatdango 
title: Flatiron Movie Theater Tickets Purchase
The application aims at providing users with detailed films information.
It uses event handler functions to add interactivity and functionality to the flatdango webpage. 
It fetches data from a json db server using GET request and displays the information using my javascript code.
After fetching data using fetch(), it uses the response: json () method to return a response with the json data as body. 
It accomplishes this by returning a promise that resolves and parses the json body text to a javascript object.
The application relies on the displayMovieDetails function to display the data on the webpage. 
The function creates new HTML elements that contain the details of the films and adds an event listener to display movie details upon clicking on a movie title.
The javascript code also includes a function and event listener that allows users to purchase tickets and determine whether there are available tickets.
How to use the application;
The films' menu is on the left side of the page.
Users have to click on a movie title to see its poster, description, runtime, showtime, and capacity.
To check the number of available tickets, the user needs to click on the Buy Ticket button which updates the sold tickets by one for each click. 