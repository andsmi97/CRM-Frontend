// @flow
import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import DealsList from "../Primatives/deal-list";
import Title from "../Primatives/title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDragging }) => (isDragging ? "#81d4fa" : "#03a9f4")};
  transition: background-color 0.1s ease;
  &:hover {
    background-color: #81d4fa;
  }
`;

export default class Column extends Component {
  render() {
    const { title, deals, index } = this.props;
    return (
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <Container ref={provided.innerRef} {...provided.draggableProps}>
            <Header isDragging={snapshot.isDragging}>
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
          </Container>
        )}
      </Draggable>
    );
  }
}
