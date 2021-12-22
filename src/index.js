import "bootstrap/dist/css/bootstrap.min.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import App from "./App";

import { AppProvider } from "./context/app";
import { AuthProvider } from "./context/auth";

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppProvider>
  </StrictMode>,
  document.getElementById("root")
);
