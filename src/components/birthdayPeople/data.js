import axios from "axios";

var options = {
  method: "GET",
  url: "https://celebrity-bucks.p.rapidapi.com/birthdays/JSON",
  headers: {
    "x-rapidapi-host": "celebrity-bucks.p.rapidapi.com",
    "x-rapidapi-key": "7f4aee9aedmsh157cb8d21c481acp1acd25jsnd51dd7c23532",
  },
};
let datas = [];
const dates = async () => {
  const getData = await axios.request(options);

  return (datas = getData.data.Birthdays);
};
dates();
export default datas;
