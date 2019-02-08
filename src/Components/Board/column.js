// @flow
import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import DealsList from "../Primatives/DealsList";
import Title from "../Primatives/title";
import { withStyles } from "@material-ui/core/styles";
import Header from "./header";

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "column"
  }
});

class Column extends Component {
  render() {
    const { title, deals, index, classes } = this.props;
    return (
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <div
            className={classes.container}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <Header className={classes.header} isDragging={snapshot.isDragging}>
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {title}
              </Title>
            </Header>
            <DealsList
              listId={title}
              listType="DEAL"
              deals={deals}
              internalScroll={this.props.isScrollable}
              isCombineEnabled={Boolean(this.props.isCombineEnabled)}
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(styles)(Column);
