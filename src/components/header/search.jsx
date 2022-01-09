import React, { useEffect, useState } from "react";
import axios from "axios";

import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useNavigate } from "react-router-dom";

export default function ComboBox() {
  const [input, setInput] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getSelectValue = (e, value) => {
    if (e.keyCode === 13) {
      setData([e.target.value]);
      // console.log(e.target.value);
    }
  };
  useEffect(() => {
    if (typeof data[0] === "string") {
      navigate("/listSearch", { state: input });
      console.log(input);
    } else if (typeof data[0] === "object") {
      // navigate("/listSearch");
      console.log(data);
    }
  }, [data]);

  async function getValue(e) {
    let keyWord = e.target.value;
    if (/[a-zA-ZñÑ0-9]/.test(keyWord)) {
      try {
        let getData = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US&query=${keyWord}&include_adult=false`
        );
        setInput(getData.data.results);
        // console.log(getData);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <Autocomplete
        className="search"
        onKeyDown={getSelectValue}
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
          <TextField
            onChange={getValue}
            className="input-search"
            {...params}
            placeholder="Movie"
          />
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
