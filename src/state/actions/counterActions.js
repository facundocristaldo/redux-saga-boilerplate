import {
  INCREMENT,
  DECREMENT,
  INITIATE_INCREMENT,
  INITIATE_DECREMENT
} from "./actionTypes";

export const increment = (number = 1) => {
  return {
    type: INITIATE_INCREMENT,
    payload: number
  };
};

export const incrementSucceed = (number = 1) => {
  return {
    type: INCREMENT,
    payload: number
  };
};

export const decrement = (number = 1) => {
  return {
    type: INITIATE_DECREMENT,
    payload: number
  };
};

export const decrementSucceed = (number = 1) => {
  return {
    type: DECREMENT,
    payload: number
  };
};
