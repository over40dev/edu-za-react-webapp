import React, { Component } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faExternalLinkAlt,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const testTweet = {
  message: "This is less than 140 characters!",
  gravatar: "nothing",
  author: {
    name: "My Name",
    handle: "@myhandle",
  },
  likes: 2,
  retweets: 10,
  timestamp: "2020-01-01 01:01:30",
};

export default class AppComponent extends Component {
  render() {
    return <Tweet tweet={testTweet} />;
  }
}

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <LikeButton count={tweet.likes} />
          <CommentButton />
          <ShareButton />
          <RetweetButton count={tweet.retweets} />
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  const url = `https://gravatar.com/avatar/${props.hash}`;
  return <img className="avatar" src={url} alt="avatar" />;
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <>
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </>
  );
}

const Message = ({ text }) => <div className="message">{text}</div>;

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <FontAwesomeIcon icon={faHeart} />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

const CommentButton = () => (
  <span className="comment-button">
    <FontAwesomeIcon icon={faComment} />
  </span>
);

const ShareButton = () => (
  <span className="share-button">
    <FontAwesomeIcon icon={faExternalLinkAlt} />
  </span>
);

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <FontAwesomeIcon icon={faRetweet} />
    {getRetweetCount(count)}
  </span>
);

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  }
}
