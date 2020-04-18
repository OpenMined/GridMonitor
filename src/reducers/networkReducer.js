import { SET_ADDRESS } from "../actions/types";

const INITIAL_STATE = {
  address: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
