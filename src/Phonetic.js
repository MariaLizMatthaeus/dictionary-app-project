import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio === "") {
    return null;
  } else {
    return (
      <div className="Phonetics">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controlsList={"nodownload"}
          controls
          className="sound"
        />
        <div className="text">{props.phonetic.text}</div>
      </div>
    );
  }
}
