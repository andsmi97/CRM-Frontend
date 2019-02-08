import React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, grid } from "../../constants";
const getBackgroundColor = (isDragging, isGroupedOver) => {
  if (isDragging) {
    return colors.green;
  }
  if (isGroupedOver) {
    return colors.grey.N30;
  }
  return colors.white;
};
//TODO change colors for theme
const useStyles = makeStyles({
  root: {
    border: "2px solid grey",
    backgroundColor: props =>
      getBackgroundColor(props.isDragging, props.isGroupedOver),
    boxShadow: props =>
      props.isDragging ? `2px 2px 1px ${colors.shadow}` : "none",
    padding: grid,
    minHeight: 40,
    marginBottom: grid,
    userSelect: "none",
    color: colors.black,
    "&:hover": {
      color: colors.black,
      textDecoration: "none"
    },
    "&:active": {
      color: colors.black,
      textDecoration: "none"
    },
    "&:focus": {
      outline: `2px solid ${colors.purple}`,
      boxShadow: "none"
    },
    display: "flex",
    alignItems: "center"
  }
});

const ItemContainer = props => {
  const { isDragging, isGroupedOver, provided } = props;
  const classes = useStyles({ isDragging, isGroupedOver });
  return (
    <a
      className={classes.root}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {props.children}
    </a>
  );
};

export default ItemContainer;
