import React, { useState, useEffect } from "react";
import axios from "axios";
import { genres } from "./data-main";
import Genres from "./Genres";
import NewFilms from "./NewFilms";
import { Grid, ThemeProvider } from "@material-ui/core";
import Divisor from "../Divisor/Divisor";

export default function Main() {
  const [getFilms, setGetFilms] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=198b2f6e124efb8ffaed4dd22cc65a8c&language=en-US&page=1`
      )
      .then((res) => {
        setGetFilms(res.data.results);
      });
  }, []);

  let data = getFilms;

  return (
    <div className="container">
      <Divisor title="ESTRENOS"></Divisor>

      <Grid
        direction="column"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid>
          <div className="main-container ">
            <div className="films-container background-color">
              <NewFilms data={data} />
            </div>
          </div>
        </Grid>
      </Grid>
      <Divisor title="CATEGORÍAS"></Divisor>
      <Grid
        // spacing={1}

        direction="column"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid>
          <div className="main-container">
            <div className="distribution">
              <Genres genres={genres} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
