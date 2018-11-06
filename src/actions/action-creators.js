import { SAVE_LOCATION } from "./actions";
import { CHANGE_VALUE } from "./actions";
import { PLAY_TIMER, STOP_TIMER, REFRESH_TIMER } from "./actions";
import { ADD_RANDOM_NUMBER, ADD_GUESSED_NUMBER } from "./actions";

export const saveLocation = myLocation => ({
  type: SAVE_LOCATION,
  payload: myLocation
});

export const changeMyValue = myValue => ({
  type: CHANGE_VALUE,
  payload: myValue
});

export const playTimer = justTime => ({
  type: PLAY_TIMER,
  payload: justTime
});

export const stopTimer = justTime => ({
  type: STOP_TIMER,
  payload: justTime
});

export const refreshTimer = justTime => ({
  type: REFRESH_TIMER,
  payload: justTime
});

export const addRandomNumber = randomNumber => ({
  type: ADD_RANDOM_NUMBER,
  value: randomNumber
});
export const addGuessedNumber = guessedNumber => ({
  type: ADD_GUESSED_NUMBER,
  value: guessedNumber
});
