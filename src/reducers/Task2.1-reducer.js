import { SAVE_LOCATION } from "../actions/actions";

const DEFAULT_STATE = {
  myLocation: null
};

export default function locationReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SAVE_LOCATION:
      return { ...state, myLocation: action.payload };
    default:
      return state;
  }
}
