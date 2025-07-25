import React from "react";
import "./Synonyms.css";

/* display the word synonyms */

export default function Synonyms(props) {
    if (props.synonyms && props.synonyms.length > 0) {
        return (
            <div className="Synonyms">
                <strong>Synonyms: </strong>
                {props.synonyms.map(function (synonym, index) {
                    return (
                        <span key={index}>
                            {synonym}
                            {index < props.synonyms.length - 1 ? ", " : ""}
                        </span>
                    );
                })}
            </div>
        );
    }
}
