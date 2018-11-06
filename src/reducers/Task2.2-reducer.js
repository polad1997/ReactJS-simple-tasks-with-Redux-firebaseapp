import { CHANGE_VALUE } from "../actions/actions";

const DEFAULT_STATE = {
  myValue: 0
};

export default function valueReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      console.log("reducer payload: ", action.payload);
      return { ...state, myValue: action.payload };
    default:
      return state;
  }
}
