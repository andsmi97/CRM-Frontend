import {
    AUTH_PENDING,
    AUTH_SUCCESS,
    AUTH_FAILED,
    SNACK_STATUS_CLOSE,
    SNACK_STATUS_OPEN,
    ALERT_STATUS_CLOSE,
    ALERT_STATUS_OPEN,
    ALERT_STATUS_ACCEPT
  } from "./constants.js";
const initialStateApp = {
    snackType: "success",
    snackMessage: "",
    snackStatus: false,
    authPending: false,
    isResponseCorrect: false,
    alertMessage: "",
    alertStatus: false,
    alertFunction: () => {}
  };
  
  export const appReducer = (state = initialStateApp, action = {}) => {
    switch (action.type) {
      case AUTH_PENDING:
        return { ...state, authPending: action.payload };
      case AUTH_SUCCESS:
        return {
          ...state,
          isResponseCorrect: true,
          authPending: false
        };
      case AUTH_FAILED:
        return {
          ...state,
          error: action.payload,
          authPending: false
        };
      case SNACK_STATUS_CLOSE:
        return { ...state, snackStatus: action.payload };
      case SNACK_STATUS_OPEN:
        return {
          ...state,
          snackStatus: action.payload.status,
          snackType: action.payload.type,
          snackMessage: action.payload.message
        };
      case ALERT_STATUS_CLOSE:
        return { ...state, alertStatus: action.payload };
      case ALERT_STATUS_OPEN:
        return {
          ...state,
          alertStatus: action.payload.status,
          alertFunction: action.payload.alertFunction,
          alertMessage: action.payload.message
        };
      case ALERT_STATUS_ACCEPT:
        return {
          ...state,
          alertStatus: action.payload.status,
          alertFunction: action.payload.alertFunction
        };
      default:
        return state;
    }
  };