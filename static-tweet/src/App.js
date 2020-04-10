import React from "react";
import "./App.css";

export default class AppComponent extends React.Component {
  render() {
    return <Tweet />;
  }
}

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      Tweet
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://gravatar.com/avatar/nothing"
      alt="avatar"
    />
  );
}

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
