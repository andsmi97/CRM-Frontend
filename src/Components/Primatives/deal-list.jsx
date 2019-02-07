// @flow
import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DealItem from "./deal-item";
import { grid, colors } from "../../constants";
import Title from "./title";

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "#81d4fa" : "#fff"};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : "inherit")};
  padding: ${grid}px;
  border: ${grid}px;
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 300px;
`;

const scrollContainerHeight = 250;

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: ${scrollContainerHeight}px;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  margin-bottom: ${grid}px;
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${scrollContainerHeight}px;
`;

/* stylelint-disable block-no-empty */
const Container = styled.div``;
/* stylelint-enable */

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
    const { deals, dropProvided } = this.props;
    const title = this.props.title ? <Title>{this.props.title}</Title> : null;

    return (
      <Container>
        {title}
        <DropZone ref={dropProvided.innerRef}>
          <InnerDealList deals={deals} />
          {dropProvided.placeholder}
        </DropZone>
      </Container>
    );
  }
}

export default class DealList extends React.Component {
  static defaultProps = {
    listId: "LIST"
  };
  render() {
    const {
      ignoreContainerClipping,
      internalScroll,
      scrollContainerStyle,
      isDropDisabled,
      isCombineEnabled,
      listId,
      listType,
      style,
      deals,
      title
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
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            {...dropProvided.droppableProps}
          >
            {internalScroll ? (
              <ScrollContainer style={scrollContainerStyle}>
                <InnerList
                  deals={deals}
                  title={title}
                  dropProvided={dropProvided}
                />
              </ScrollContainer>
            ) : (
              <InnerList
                deals={deals}
                title={title}
                dropProvided={dropProvided}
              />
            )}
          </Wrapper>
        )}
      </Droppable>
    );
  }
}
