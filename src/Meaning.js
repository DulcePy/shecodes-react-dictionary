import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

/* display the word definition and examples */
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition: </strong>
              {definition.definition}
            </div>
            <div className="example">
              {definition.example && (
                <span>
                  <strong>Example: </strong>
                  <em>{definition.example}</em>
                </span>
              )}
            </div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
