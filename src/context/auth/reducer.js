import React, { useEffect, createContext, useContext, useReducer } from "react";

import * as actionTypes from "./types";
import { login, signUp } from "./actions";

const AuthContext = createContext();

const initialState = {
  currUser: {},
  isAuth: false,
  isLogging: false,
  loginError: null,
  isSigningUp: false,
  signUpError: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isAuth: false,
        isLogging: true,
        loginError: null
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        currUser: action.payload,
        isAuth: true,
        isLogging: false
      };
    }
    case actionTypes.LOGIN_ERROR: {
      return {
        ...state,
        isAuth: false,
        isLogging: false,
        loginError: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    login: (values) => login(values, dispatch),
    signUp: (values) => signUp(values, dispatch)
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) return null;
  return context;
}
