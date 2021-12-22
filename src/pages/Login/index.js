import React from "react";

import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { FormattedMessage, useIntl } from "react-intl";

import { languages } from "../../i18n";
import { useAuth } from "../../context/auth";
import { useApp } from "../../context/app";
import FormInput from "../../components/atoms/FormInput";
import LangSelect from "../../components/atoms/LangSelect";

function LoginPage(props) {
  const { state, login } = useAuth();
  const {
    state: {
      preferences: { locale }
    },
    setLocale
  } = useApp();
  const intl = useIntl();

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      login(values);
    }
  });

  if (state.isAuth) return <Redirect to="/" />;

  return (
    <div className="container">
      <form className="card p-4" onSubmit={handleSubmit}>
        <h4>
          <FormattedMessage id="loginLabel" />
        </h4>
        <FormInput
          label={intl.formatMessage({ id: "emailLabel" })}
          name="email"
          type="email"
          value={values.email}
          placeholder={intl.formatMessage({ id: "emailPlaceholder" })}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          label={intl.formatMessage({ id: "passwordLabel" })}
          name="password"
          value={values.password}
          placeholder={intl.formatMessage({ id: "passwordPlaceholder" })}
          handleChange={handleChange}
        />
        <button type="submit" className="mt-3 btn btn-primary">
          <FormattedMessage id="loginLabel" />
        </button>
      </form>
      <div className="mt-4">
        <LangSelect
          options={languages}
          selected={locale}
          handleClick={(lang) => {
            console.log(lang);
            setLocale(lang);
          }}
        />
      </div>
    </div>
  );
}

export default LoginPage;
