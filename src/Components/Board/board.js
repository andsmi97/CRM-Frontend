// @flow
import React, { Component } from "react";
import Column from "./column";
import { withStyles } from "@material-ui/core/styles";
import reorder, { reorderDealMap } from "../../reorder";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const styles = {
  container: {
    minHeight: "100%",
    minWidth: "100%",
    display: "inline-flex"
  }
};
class Board extends Component {
  static defaultProps = {
    isCombineEnabled: false
  };

  state = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial)
  };

  onDragEnd = result => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow = [...this.state.ordered];
        shallow.splice(result.source.index, 1);
        this.setState({ ordered: shallow });
        return;
      }

      const column = this.state.columns[result.source.droppableId];
      const withDealRemoved = [...column];
      withDealRemoved.splice(result.source.index, 1);
      const columns = {
        ...this.state.columns,
        [result.source.droppableId]: withDealRemoved
      };
      this.setState({ columns });
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === "COLUMN") {
      const ordered = reorder(
        this.state.ordered,
        source.index,
        destination.index
      );

      this.setState({
        ordered
      });

      return;
    }

    const data = reorderDealMap({
      dealMap: this.state.columns,
      source,
      destination
    });

    this.setState({
      columns: data.dealMap
    });
  };

  render() {
    const { classes } = this.props;
    const { columns, ordered } = this.state;
    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={false}
        isCombineEnabled={this.props.isCombineEnabled}
      >
        {provided => (
          <div
            className={classes.container}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                title={key}
                deals={columns[key]}
                isScrollable={this.props.withScrollableColumns}
                isCombineEnabled={this.props.isCombineEnabled}
              />
            ))}
          </div>
        )}
      </Droppable>
    );

    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>{board}</DragDropContext>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Board);
