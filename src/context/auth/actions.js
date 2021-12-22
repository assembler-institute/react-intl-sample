import * as actionTypes from "./types";
import api from "../../api";

const newAction = (type, payload = null) => {
  return {
    type,
    payload
  };
};

export const login = async (values, dispatch) => {
  dispatch(newAction(actionTypes.LOGIN_REQUEST));
  try {
    const res = await api.login(values);
    dispatch(newAction(actionTypes.LOGIN_SUCCESS, res));
  } catch (err) {
    dispatch(newAction(actionTypes.LOGIN_ERROR, err));
  }
};

export const signUp = async (values, dispatch) => {
  dispatch(newAction(actionTypes.SIGN_UP_REQUEST));
  try {
    const res = await api.signUp(values);
    dispatch(newAction(actionTypes.SIGN_UP_SUCCESS, res));
  } catch (err) {
    dispatch(newAction(actionTypes.SIGN_UP_ERROR, err));
  }
};
