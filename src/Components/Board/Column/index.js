// @flow
import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import DealsList from "../../Primatives/DealsList";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../Primatives/header";

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    transition: "background-color ease 0.2s",
    textAlign: "center",
    flexGrow: 1,
    userSelect: "none",
    position: "relative",
    padding: 20
  }
});

class Column extends Component {
  render() {
    const { title, deals, index, classes } = this.props;
    return (
      <Draggable draggableId={title} index={index} isDragDisabled={true}>
        {(provided, snapshot) => (
          <div
            className={classes.container}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <Header
              className={classes.header}
              isDragging={snapshot.isDragging}
              index={index}
              title={title}
            >
              <h4 className={classes.title} {...provided.dragHandleProps}>
                {title}
              </h4>
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
