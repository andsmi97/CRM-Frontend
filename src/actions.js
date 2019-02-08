import {
    BACKEND_URI,
    AUTH_PENDING,
    AUTH_SUCCESS,
    AUTH_FAILED,
    SNACK_STATUS_CLOSE,
    SNACK_STATUS_OPEN,
    ALERT_STATUS_CLOSE,
    ALERT_STATUS_OPEN,
    ALERT_STATUS_ACCEPT
  } from "./constants.js";
//   import {
//     ON_CORRECT_RESPONSE,
//     ON_WRONG_RESPONSE
//   } from "./Components/Auth/constants";
  
  export const closeSnack = () => ({
    type: SNACK_STATUS_CLOSE,
    payload: false
  });
  
  export const openSnack = (type, message) => ({
    type: SNACK_STATUS_OPEN,
    payload: { message, type, status: true }
  });
  
  export const closeAlert = () => ({
    type: ALERT_STATUS_CLOSE,
    payload: false
  });
  export const acceptAlert = () => ({
    type: ALERT_STATUS_ACCEPT,
    payload: { status: false, alertFunction: () => {} }
  });
  
  export const openAlert = (message, alertFunction) => ({
    type: ALERT_STATUS_OPEN,
    payload: { message, alertFunction, status: true }
  });
//   //auth
//   export const authenticate = () => dispatch => {
//     const token = window.localStorage.getItem("token");
//     if (token) {
//       dispatch({ type: AUTH_PENDING, payload: true });
//       fetch(`${BACKEND_URI}/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token
//         }
//       })
//         .then(response => response.json())
//         .then(data => {
//           if (data && data.success === "true") {
//             dispatch({ type: ON_CORRECT_RESPONSE, payload: true });
//           }
//           return data;
//         })
//         .then(data => dispatch({ type: AUTH_SUCCESS, payload: data }))
//         .catch(error => {
//           dispatch({ type: AUTH_FAILED, payload: error });
//           dispatch({ type: ON_WRONG_RESPONSE, payload: error });
//         });
//     }
//   };
  