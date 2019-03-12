import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props => {
      if (props.title === "Успех") {
        return "#00e676";
      }
      if (props.title === "Неудача") {
        return "#ff7043";
      }
      return props.isDragging
        ? "#bbdefb"
        : props.index % 2
        ? "#42a5f5"
        : "#64b5f6";
    },
    "&:hover": { backgroundColor: "#bbdefb" },
    transition: "background-color 0.1s ease"
  }
});

const Header = props => {
  const classes = useStyles({
    isDragging: props.isDragging,
    index: props.index,
    title: props.title
  });
  return <div className={classes.root}>{props.children}</div>;
};

export default Header;
