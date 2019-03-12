// @flow
import React, { Component } from "react";
import Column from "./Column";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import reorder, { reorderDealMap } from "./reorder";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { changeOrder, changeColumns } from "./actions";
import DealModal from "../DealModal";
const mapStateToProps = state => {
  return {
    columns: state.boardReducer.columns,
    ordered: state.boardReducer.ordered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeOrder: ordered => dispatch(changeOrder(ordered)),
    changeColumns: columns => dispatch(changeColumns(columns))
    // addDeal: () => dispatch(addDeal())
  };
};

const styles = {
  container: {
    minHeight: "100%",
    minWidth: "100%",
    display: "inline-flex"
  }
};
class Board extends Component {
  static defaultProps = {
    isCombineEnabled: true
  };

  onDragEnd = result => {
    const { changeOrder, changeColumns } = this.props;
    const { combine, destination, source, type } = result;

    if (combine) {
      if (result.type === "COLUMN") {
        const shallow = [...this.props.ordered];
        shallow.splice(result.source.index, 1);
        changeOrder(shallow);
        return;
      }

      const column = this.props.columns[result.source.droppableId];
      const withDealRemoved = [...column];
      withDealRemoved.splice(result.source.index, 1);
      const columns = {
        ...this.props.columns,
        [result.source.droppableId]: withDealRemoved
      };
      changeColumns(columns);

      return;
    }

    // dropped nowhere
    if (!destination) {
      return;
    }

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    if (type === "COLUMN") {
      const ordered = reorder(
        this.props.ordered,
        source.index,
        destination.index
      );
      changeOrder(ordered);
      return;
    }

    const data = reorderDealMap({
      dealMap: this.props.columns,
      source,
      destination
    });

    changeColumns(data.dealMap);
  };

  render() {
    const { classes, columns, ordered } = this.props;
    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={false}
        // isCombineEnabled={this.props.isCombineEnabled}
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
                // isCombineEnabled={this.props.isCombineEnabled}
              />
            ))}
          </div>
        )}
      </Droppable>
    );

    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>{board}</DragDropContext>
        <DealModal />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Board));
