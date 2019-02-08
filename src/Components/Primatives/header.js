import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props => (props.isDragging ? "#81d4fa" : "#03a9f4"),
    "&:hover": { backgroundColor: "#81d4fa" },
    transition: "background-color 0.1s ease"
  }
});

const Header = props => {
  const classes = useStyles({
    isDragging: props.isDragging
  });
  return <div className={classes.root}>{props.children}</div>;
};

export default Header;
