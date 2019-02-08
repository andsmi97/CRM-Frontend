import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DealItem from "./DealItem";
import { withStyles } from "@material-ui/styles";
import ListWrapper from "./ListWrapper";

const styles = () => ({
  dropZone: {
    minHeight: "74vh",
    marginBottom: "grid"
  },
  scrollContainer: {
    overflowX: "hidden",
    overflowY: "auto",
    maxHeight: "75vh"
  },
  transition: "background-color ease 0.2s",
  textAlign: "center",
  flexGrow: 1,
  userSelect: "none",
  position: "relative",
  padding: 20
});

class InnerDealList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.deals !== this.props.deals) {
      return true;
    }

    return false;
  }

  render() {
    return this.props.deals.map((deal, index) => (
      <Draggable key={deal.id} draggableId={deal.id} index={index}>
        {(dragProvided, dragSnapshot) => (
          <DealItem
            key={deal.id}
            deal={deal}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
            provided={dragProvided}
          />
        )}
      </Draggable>
    ));
  }
}

class InnerList extends React.Component {
  render() {
    const { deals, dropProvided, classes } = this.props;
    const title = this.props.title ? (
      <h4 className={classes.title}>{this.props.title}</h4>
    ) : null;

    return (
      <div>
        {title}
        <div className={classes.dropZone} ref={dropProvided.innerRef}>
          <InnerDealList deals={deals} />
          {dropProvided.placeholder}
        </div>
      </div>
    );
  }
}
const InnerListWithStyle = withStyles(styles)(InnerList);

class DealsList extends React.Component {
  static defaultProps = {
    listId: "LIST"
  };
  render() {
    const {
      ignoreContainerClipping,
      isDropDisabled,
      isCombineEnabled,
      listId,
      listType,
      deals,
      title,
      classes
    } = this.props;

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
        isCombineEnabled={isCombineEnabled}
      >
        {(dropProvided, dropSnapshot) => (
          <ListWrapper
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            {...dropProvided.droppableProps}
          >
            <div className={classes.scrollContainer}>
              <InnerListWithStyle
                deals={deals}
                title={title}
                dropProvided={dropProvided}
              />
            </div>
          </ListWrapper>
        )}
      </Droppable>
    );
  }
}

export default withStyles(styles)(DealsList);
