import React from "react";

const VideoItem = (props) => {
  return (
    <li>
      <img
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      ></img>
      <div>
        <p>{props.video.snippet.title}</p>
      </div>
    </li>
  );
};

export default VideoItem;
