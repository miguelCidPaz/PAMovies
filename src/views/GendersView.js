import React from "react";
import ListGenres from "../components/ListGenres/listGenres";
import { Link } from "react-router-dom";

function GendersView() {
  return (
    <div className="centerContent">
      <Link to="/">Back</Link>
      <ListGenres />
    </div>
  );
}
export default GendersView;
