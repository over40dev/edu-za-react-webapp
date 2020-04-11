import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faExternalLinkAlt,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default class AppComponent extends Component {
  render() {
    return <Tweet />;
  }
}

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <LikeButton />
          <CommentButton />
          <ShareButton />
          <RetweetButton />
        </div>
      </div>
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

function NameWithHandle() {
  return (
    <>
      <span className="name">Your Name</span>
      <span className="name">@yourhandle</span>
    </>
  );
}

function Message() {
  return <div className="message">This is less than 140 characters!</div>;
}

const Time = () => <span className="time">3h ago</span>;

const LikeButton = () => <FontAwesomeIcon className="button" icon={faHeart} />;

const CommentButton = () => (
  <FontAwesomeIcon className="button" icon={faComment} />
);

const ShareButton = () => (
  <FontAwesomeIcon className="button" icon={faExternalLinkAlt} />
);

const RetweetButton = () => (
  <FontAwesomeIcon className="button" icon={faRetweet} />
);
