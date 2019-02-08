import React from "react";
import { makeStyles } from "@material-ui/styles";
import { grid } from "../../constants";
const useStyles = makeStyles({
  root: {
    backgroundColor: props => (props.isDraggingOver ? "#81d4fa" : "#fff"),
    display: "flex",
    flexDirection: "column",
    opacity: props => (props.isDropDisabled ? 0.5 : "inherit"),
    padding: grid,
    border: grid,
    paddingBottom: 0,
    transition: "background-color 0.1s ease, opacity 0.1s ease",
    userSelect: "none",
    width: 350
  }
});

const ListWrapper = props => {
  const { isDraggingOver, isDropDisabled, children } = props;
  const classes = useStyles({ isDraggingOver, isDropDisabled });
  return <div className={classes.root}>{children}</div>;
};

export default ListWrapper;
