import React, { useState, useEffect } from "react";
import axios from "axios";
import { genres } from "../Main/data-main";
import AnimationGenre from "./AnimationGenre";
import Divisor from "../Divisor/Divisor";

export default function ListGenres(props) {
    const [orderFilms, setOrderFilms] = useState([]);
    {console.log(props)}
    /*Ejemplo con pagina de Animation === 16*/
    let gender_ID = genres[2].id
    useEffect(async () => {
      await axios
        .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US&with_genres=${gender_ID}&primary_release_year=2021`
        )
        
        .then((res) => {
            setOrderFilms(res.data.results);
        }); 
    }, []);
   
    let data = orderFilms 

    return (
 <div className="title-genre">
         {console.log(props)}
    <Divisor title={`${genres[2].title}`}></Divisor>
    <div className="genre-container"> 
        <AnimationGenre data={data} gender_ID={`${genres[2].id}`}/> 
    </div>
    </div>    
    )
  
}
 

    
