//MovieShowcase is the component that will house all raw data assoc with the movies we want to display
import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js' //import all info about each movie

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie) =>
        <MovieCard
          title = {movie.title}
          rating = {movie.IMDBRating}
          genres = {movie.genres}
          poster = {movie.poster}
          />)
  }
//just to pass the tests
  // generateMovieCards = () => {
  //   return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
  // }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
