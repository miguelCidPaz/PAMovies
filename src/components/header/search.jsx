import React, { useEffect, useState } from "react";
import axios from "axios";

import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useNavigate } from "react-router-dom";

export default function ComboBox(props) {
  const [input, setInput] = useState([]);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let fitrando = input.find((element) => element.title === data[0]);

    if (data[0] != null && fitrando) {
      navigate(`/details/movie/${fitrando.id}`);
    } else if (data[0] != null) {
      navigate("/listSearch", { state: input });
    }
  }, [data]);
  useEffect(() => {
    const fetchData = async () => {
      if (/[a-zA-ZñÑ0-9]/.test(value)) {
        try {
          let getData = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US&query=${value}&include_adult=false`
          );
          setInput(getData.data.results);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [value]);

  // console.log("se renderiza");
  return (
    <>
      <Autocomplete
        key={true}
        className="search"
        onChange={(e, value) => setData([value])}
        freeSolo
        clearOnBlur
        id="free-solo-demo"
        options={input.map((option) => option.title)}
        // getOptionLabel={(option) =>
        //   typeof option.title === "string" || option.title instanceof String
        //     ? option.title
        //     : ""
        // }
        sx={{ width: 700 }}
        renderInput={(params) => (
          <TextField
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? setData([e.target.value]) : null
            }
            className="input-search"
            {...params}
            placeholder="Movie"
          />
        )}
      />
    </>
  );
}
