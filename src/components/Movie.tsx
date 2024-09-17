import React from 'react'

type MovieProps = {
    name: string;
    year: number;
    director: string;
    score: number;
}

const Movie = ({name, year, director, score}: MovieProps) => {
  return (
    <div className="bg-slate-800 mx-32 rounded-3xl h-16 my-3 flex items-center justify-between overflow-auto">
        <span className="ml-8 p-1 text-4xl text-slate-400 flex-1 truncate">{name} <span className="text-slate-600">by {director}</span></span>
        <div className="flex justify-between w-96">
        <span className="text-4xl text-white text-center truncate">{year}</span>
        <span className="text-4xl text-slate-400 mr-2 text-right truncate">{score} / 10</span>
        </div>
    </div>
  )
}

export default Movie