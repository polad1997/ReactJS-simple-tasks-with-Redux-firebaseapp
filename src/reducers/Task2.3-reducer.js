import { PLAY_TIMER, STOP_TIMER, REFRESH_TIMER } from "../actions/actions";

const DEFAULT_STATE = {
  changedTime: null
};

export default function timeReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case PLAY_TIMER:
      console.log("reducer payload: ", action.payload);
      return { ...state, changedTime: action.payload };
    case STOP_TIMER:
      console.log("reducer payload: ", action.payload);
      return { ...state, changedTime: action.payload };
    case REFRESH_TIMER:
      console.log("reducer payload: ", action.payload);
      return { ...state, changedTime: action.payload };
    default:
      return state;
  }
}
