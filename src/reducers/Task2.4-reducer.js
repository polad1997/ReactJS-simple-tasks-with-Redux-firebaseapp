import { ADD_GUESSED_NUMBER, ADD_RANDOM_NUMBER } from "../actions/actions";

const DEFAULT_STATE = {
  randomNumber: Math.floor(Math.random() * 100),
  guessedNumber: 1
};

export default function gameReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_GUESSED_NUMBER:
      return { ...state, guessedNumber: action.value };
    case ADD_RANDOM_NUMBER:
      return { ...state, randomNumber: action.value };
    default:
      return state;
  }
}
