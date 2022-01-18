import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="half-rating-read"
        // recive porps el valor puntuado que va de 0 a 10
        defaultValue={props.star / 2}
        precision={0.5}
        readOnly
      />
    </div>
  );
}
