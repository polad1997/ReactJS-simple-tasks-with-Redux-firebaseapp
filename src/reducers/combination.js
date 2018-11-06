import { combineReducers } from "redux";
import locationReducer from "./Task2.1-reducer";
import valueReducer from "./Task2.2-reducer";
import timeReducer from "./Task2.3-reducer";
import gameReducer from "./Task2.4-reducer";

export default combineReducers({
  storeOfLocation: locationReducer,
  storeOfNumbers: valueReducer,
  storeOfTime: timeReducer,
  gameStore: gameReducer
});
