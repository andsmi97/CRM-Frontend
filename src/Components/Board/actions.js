import {
  CHANGE_ORDER,
  CHANGE_COLUMNS,
  ADD_DEAL,
  DEAL_STATUS_CLOSE,
  DEAL_STATUS_ACCEPT,
  DEAL_STATUS_OPEN,
  CHANGE_DEAL_FIELD
} from "./constants.js";

export const changeOrder = ordered => ({
  type: CHANGE_ORDER,
  payload: ordered
});
export const changeColumns = columns => ({
  type: CHANGE_COLUMNS,
  payload: columns
});
export const addDeal = () => ({
  type: ADD_DEAL
});

export const changeDealField = (field, text) => ({
  type: CHANGE_DEAL_FIELD,
  payload: { field, text }
});

export const closeDealModal = () => ({
  type: DEAL_STATUS_CLOSE,
  payload: false
});
export const acceptDealModal = () => ({
  type: DEAL_STATUS_ACCEPT,
  payload: { status: false, dealModalFunction: () => {} }
});

// export const openDealModal = (deal, dealModalFunction) => ({
export const openDealModal = (type, dealModalFunction, deal) => {
  if (!deal) deal = {};
  return {
    type: DEAL_STATUS_OPEN,
    payload: { deal, type, dealModalFunction, status: true }
  };
};
