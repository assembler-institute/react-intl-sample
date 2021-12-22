import React, { useEffect, createContext, useContext, useReducer } from "react";

import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import { locales, messages } from "../../i18n";
import { getUserLocaleIfHandled } from "../../services/LocaleExtractor";

const AppContext = createContext();

const cache = createIntlCache();

const newAction = (type, payload = null) => {
  return {
    type: type,
    payload: payload
  };
};

const actionTypes = {
  THEME_MODE_UPDATE: "THEME_MODE_UPDATE",
  LOCALE_UPDATE: "LOCALE_UPDATE"
};

const initialState = {
  preferences: {
    locale: locales.ENGLISH,
    themeMode: "light"
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOCALE_UPDATE: {
      return {
        ...state,
        preferences: {
          ...state.preferences,
          locale: action.payload
        }
      };
    }
    case actionTypes.THEME_MODE_UPDATE: {
      return {
        ...state,
        preferences: {
          ...state.preferences,
          themeMode: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const intl = createIntl(
    {
      locale: state.preferences.locale,
      messages: messages[state.preferences.locale]
    },
    cache
  );

  const value = { state };

  value.setLocale = (locale) =>
    dispatch(newAction(actionTypes.LOCALE_UPDATE, locale));
  value.setThemeMode = (themeMode) =>
    dispatch(newAction(actionTypes.THEME_MODE_UPDATE, themeMode));

  useEffect(() => {
    const newLocale = getUserLocaleIfHandled(Object.values(locales));
    if (newLocale) value.setLocale(newLocale);
  }, []);

  return (
    <RawIntlProvider value={intl}>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </RawIntlProvider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) return null;
  return context;
}
