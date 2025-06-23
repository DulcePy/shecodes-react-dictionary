import React from "react";
import "./Phonetic.css";

/* display the word phonetic */
export default function Phonetic(props) {
  if (!props.phonetic) {
    return null;
  }
  const { text, audio } = props.phonetic;
  return (
    <div className="Phonetic">
      {text && <span className="text phonetic">{text}</span>} <br />
      {audio && (
        <audio controls>
          <source src={audio} type="audio/mpeg" /> <br />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
