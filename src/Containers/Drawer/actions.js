import {
  CHANGE_SECTION,
  HANDLE_DRAWER_OPEN,
  HANDLE_DRAWER_CLOSE
} from "./constants.js";
export const changeSection = section => ({
  type: CHANGE_SECTION,
  payload: section
});
export const openDrawer = () => ({ type: HANDLE_DRAWER_OPEN });
export const closeDrawer = () => ({ type: HANDLE_DRAWER_CLOSE });
