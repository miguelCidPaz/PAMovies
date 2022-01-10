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

  const getSelectValue = (e, value) => {
    setData([value]);
  };

  useEffect(() => {
    if (typeof data[0] === "string" && data[0] != null) {
      navigate("/listSearch", { state: input });
      console.log(input);
    } else if (typeof data[0] === "object" && data[0] != null) {
      navigate("/listSearch", { state: data });
      console.log(data);
    }
  }, [data]);
  let valueInput = value;
  async function getValue(e) {
    let keyWord = e.target.value;

    if (/[a-zA-ZñÑ0-9]/.test(keyWord)) {
      try {
        let getData = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US&query=${keyWord}&include_adult=false`
        );
        setInput(getData.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    setValue(valueInput);
  }
  return (
    <>
      <Autocomplete
        key={true}
        className="search"
        onChange={getSelectValue}
        freeSolo
        value={value}
        id="free-solo-demo"
        clearOnBlur
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
            value=""
            className="input-search"
            {...params}
            placeholder="Movie"
          />
        )}
      />
    </>
  );
}
