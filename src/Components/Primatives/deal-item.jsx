// @flow
import React from "react";
import styled from "styled-components";
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

const Container = styled.a`
  border: 2px solid grey;
  background-color: ${props =>
    getBackgroundColor(props.isDragging, props.isGroupedOver)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.shadow}` : "none"};
  padding: ${grid}px;
  min-height: 40px;
  margin-bottom: ${grid}px;
  user-select: none;
  color: ${colors.black};
  &:hover,
  &:active {
    color: ${colors.black};
    text-decoration: none;
  }
  &:focus {
    outline: 2px solid ${colors.purple};
    box-shadow: none;
  }
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${grid}px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Content = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
export default class DealItem extends React.PureComponent {
  render() {
    const { deal, isDragging, isGroupedOver, provided } = this.props;

    return (
      <Container
        isDragging={isDragging}
        isGroupedOver={isGroupedOver}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Avatar src={deal.manager.avatarUrl} alt={deal.manager.name} />
        <Content>
          <h4 className="no-gutters">{deal.content}</h4>
          <p className="no-gutters">{deal.contact}</p>
          <p className="no-gutters">{deal.phone}</p>
          <p className="no-gutters">{deal.price} Руб</p>
        </Content>
      </Container>
    );
  }
}
