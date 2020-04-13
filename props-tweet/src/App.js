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
        <NameWithHandle name="My Name" handle="@myhandlde" />
        <Time hours={10}/>
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

function NameWithHandle({name, handle}) {
  return (
    <>
      <span className="name">{name}</span>
      <span className="name">{handle}</span>
    </>
  );
}

function Message() {
  return <div className="message">This is less than 140 characters!</div>;
}

const Time = (props) => <span className="time">{props.hours}h ago</span>;

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
