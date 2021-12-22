import React from "react";
import { FormattedMessage } from "react-intl";

function HomePage(props) {
  return (
    <div className="container">
      <h1>
        <FormattedMessage id="welcomeLabel" />
      </h1>
    </div>
  );
}

export default HomePage;
