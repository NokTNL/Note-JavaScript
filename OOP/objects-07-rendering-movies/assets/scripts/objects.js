"use strict";
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Movie database
const movies = [];
// Test movie item
/* movies.push({
  info: {
    title: "Star Wars",
    director: "George Lucas",
  },
  id: 1,
  getFormattedTitle: function () {
    return this.info.title.toUpperCase();
  },
}); */

// handler for when the addMovieBtn is clicked
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  /* May also need some || code to check if *ALL* of the input above is empty, using trim() 
  If the title is empty, don't add a new movie */
  if (title.trim() === "") {
    return;
  }

  // create new Movie object
  const newMovie = {
    info: {
      title, // property shorthand; = 'title': title
      [extraName]: extraValue, // dynamic property name
    },
    id: Math.floor(Math.random() * 10000), // Random ID
    getFormattedTitle: function () {
      return this.info.title.toUpperCase();
    },
  };
  movies.push(newMovie);
  // can be removed:
  console.log(movies[movies.length - 1]);
  renderMovies();
};

const renderMovies = (filterTerm = "") => {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; // To clear the movieList and re-render

  //This may be edited, now make the <ul id="movie-list"> visible regardless, even when movieList is empty
  movieList.classList.add("visible");

  // If filterTerm is not empty
  const filteredMovies = !filterTerm
    ? movies
    : movies.filter((movie) =>
        movie.info.title.toLowerCase().includes(filterTerm.toLowerCase())
      );

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const {
      info: { title, ...otherInfo },
      ...otherProps // This will include the getFormattedTitle method as well
    } = movie; // Object destructuring: extracts the all the details inside the object to reduce repetition.

    let { getFormattedTitle } = movie; // !! If you do this or you will have this = window (or = undefined in strict mode) as it was not called from an object
    //To fix the this binding problem of getFormattedTitle, use bind() to bind this:
    // getFormattedTitle = getFormattedTitle.bind(movie);
    // Or just use call() which also has a "this" argument: (or apply(), same)
    let elementText = getFormattedTitle.call(movie); // Change this later if you want to use destructuring to extract the method as well

    // for ... in loop for objects
    for (const prop in otherInfo) {
      elementText += ` - ${prop}: ${otherInfo[prop]}`;
    }
    movieElement.textContent = elementText;
    movieList.appendChild(movieElement);
  });
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
