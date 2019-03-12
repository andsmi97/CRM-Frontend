import React from "react";
import { grid } from "../../constants";
import ItemContainer from "./ItemContainer";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: grid,
    flexShrink: 0,
    flexGrow: 0
  },
  content: {
    flexGrow: 1,
    flexBasis: "100%",
    display: "flex",
    flexDirection: "column"
  },
  row: {
    margin: 0,
    padding: 0
  }
});

class DealItem extends React.PureComponent {
  render() {
    const { deal, isDragging, isGroupedOver, provided, classes } = this.props;
    return (
      <ItemContainer
        isDragging={isDragging}
        isGroupedOver={isGroupedOver}
        provided={provided}
      >
        <img
          className={classes.avatar}
          src={deal.manager.avatarUrl}
          alt={deal.manager.name}
        />
        <div className={classes.content}>
          <h4 className={classes.row}>{deal.name}</h4>
          <p className={classes.row}>{deal.contact}</p>
          <p className={classes.row}>{deal.phone}</p>
          <p className={classes.row}>{deal.price} Руб</p>
        </div>
      </ItemContainer>
    );
  }
}
export default withStyles(styles)(DealItem);
