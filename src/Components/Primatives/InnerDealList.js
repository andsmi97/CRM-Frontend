import React from "react";
import { Draggable } from "react-beautiful-dnd";
import DealItem from "./DealItem";
import { openDealModal } from "../Board/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  openDealModal: (type, dealFunction, deal) =>
    dispatch(openDealModal(type, dealFunction, deal))
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
      <div
        key={deal.id}
        onClick={() => {
          console.log(deal);
          this.props.openDealModal("update", () => {}, deal);
        }}
      >
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
      </div>
    ));
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerDealList);
