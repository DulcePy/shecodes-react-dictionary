import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic.text}</span> <br />
      <audio controls>
        <source src={props.phonetic.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
