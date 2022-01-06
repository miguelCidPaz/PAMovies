
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { genres } from './data-main';
import Genres from './Genres'
import NewFilms from './NewFilms'
import { Grid } from '@material-ui/core'

export default function Main() {
    const [getFilms, setGetFilms] = useState([]);

    useEffect(async () => {
        await axios
            .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=198b2f6e124efb8ffaed4dd22cc65a8c&language=es`)
            .then((res) => {
                setGetFilms(res.data.results);
            })
    }, []);

    let data = getFilms;

    return (

        <Grid
            container
            spacing={1}
            direction="column"
            alignItems='center'
            justifyContent="center"
            alignContent="center"
            wrap="nowrap"
        >

            <Grid item xs={9} md={7}>
                <div className="main-container">
                    <p className='title-container'>ESTRENOS</p>
                    <div>
                        <NewFilms data={data} />
                    </div>
                </div>
            </Grid>
            <Grid item xs={10} md={7} >
                <div className="main-container" >
                    <p className='title-container'>CATEGORÍAS</p>
                    <div className='distribution'>
                        <Genres genres={genres} />
                    </div>

                </div>
            </Grid>

        </Grid >

    )
}

