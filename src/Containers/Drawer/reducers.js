import {
  CHANGE_SECTION,
  HANDLE_DRAWER_OPEN,
  HANDLE_DRAWER_CLOSE
} from "./constants.js";

const initialStateDrawer = {
  open: true,
  section: "Pipeline"
};

export const routeReducer = (state = initialStateDrawer, action = {}) => {
  switch (action.type) {
    case CHANGE_SECTION:
      return { ...state, section: action.payload };
    case HANDLE_DRAWER_OPEN:
      return { ...state, open: true };
    case HANDLE_DRAWER_CLOSE:
      return { ...state, open: false };
    default:
      return state;
  }
};
