import { combineReducers } from "redux";

import networkReducer from "./networkReducer";

export default combineReducers({
  network: networkReducer
});
