import React, { useEffect, useState } from "react";
import axios from "axios";

import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox() {
  const [input, setInput] = useState([]);
  const [data, setData] = useState([]);
  const getValueSelect = (e, value) => {
    setData(value);
    console.log(value);
    console.log(input);
  };

  async function hola(e, value) {
    let keyWord = e.target.value;

    if (/[a-zA-ZñÑ]/.test(keyWord)) {
      let getData = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US&query=${keyWord}&include_adult=false`
      );

      setInput(getData.data.results);
    }
  }

  return (
    <>
      <Autocomplete
        className="search"
        onChange={getValueSelect}
        freeSolo
        id="free-solo-demo"
        options={input}
        getOptionLabel={(option) =>
          typeof option.title === "string" || option.title instanceof String
            ? option.title
            : ""
        }
        sx={{ width: 700 }}
        renderInput={(params) => (
          <TextField onChange={hola} {...params} placeholder="Movie" />
        )}
      />
      {/* <div>
        {input.map((element) => {
          return <p key={element.id}>{element.title}</p>;
        })}
      </div> */}
    </>
  );
}
