import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from './components/MovieForm';
import Movie from './components/Movie';

function App() {

  type Movie = {
    name: string;
    year: number;
    director: string;
    score: number;
  }

  const createMovie = (name: string, year: number, director: string, score: number): void => {
    let newMovie: Movie = {
      name: name,
      year: year, 
      director: director,
      score: score
    }
    setMovieList(prev => [...prev, newMovie])
  }


  const [movieList, setMovieList] = useState<Movie[]>([]);

  return (
    <div className="max-h-screen h-screen w-screen bg-slate-950 flex flex-col">
      <MovieForm createMovie={createMovie}/>
      <div className="overflow-auto mt-8 flex-1 mb-8">
      {movieList.map((movie, i) => {
        return <Movie name={movie.name} year={movie.year} director={movie.director} score={movie.score}/>
      })}
      </div>
    </div>
  );
}

export default App;
