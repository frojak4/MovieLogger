import React, { useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";



type MovieFormProps = {
    createMovie: (name: string, year: number, director: string, score: number) => void;
}

const MovieForm = ({createMovie}: MovieFormProps) => {

 const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const formatYear: number = parseInt(year);
    const formatScore: number = parseInt(score);
    createMovie(movieName, formatYear, director, formatScore)

    setAddToggle(false);
 }

 const [movieName, setMovieName] = useState('');
 const [year, setYear] = useState('');
 const [director, setDirector] = useState('');
 const [score, setScore] = useState('');
 const [addToggle, setAddToggle] = useState(false);


 const handleMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value)
 }

 const handleMovieYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
 }

 const handleDirector = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirector(e.target.value)
 }

 const handleMovieScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore(e.target.value);
 }


  return (
    <div>
        {addToggle ? 
        <form className="flex flex-col text-white relative items-center text-center bg-slate-800 max-w-80 p-8 mx-auto rounded-xl">
            <div onClick={() => setAddToggle(!addToggle)}>
            <IoIosCloseCircleOutline className="text-3xl absolute top-2 right-2"/>
            </div>
            Name
            <input type="text" className="text-slate-900" placeholder='Name of Movie' value={movieName} onChange={handleMovieName}/>
            Year
            <input type="text" className="text-slate-900" placeholder='Year' value={year} onChange={handleMovieYear}/>  
            Director
            <input type="text" className="text-slate-900" placeholder='Director' value={director} onChange={handleDirector}/>
            Score
            <input type="text" className="text-slate-900" placeholder='Score' value={score} onChange={handleMovieScore}/>  
            <button type="button" onClick={(event) => handleFormSubmit(event)}>Add Movie</button>
        </form>
        : 
        <div className="flex justify-center bg-slate-800 mx-auto p-8 max-w-min rounded-xl" onClick={() => setAddToggle(!addToggle)}>
            <FaRegPlusSquare className="text-5xl text-slate-500"/>
            </div>}
    </div>
  )
}

export default MovieForm