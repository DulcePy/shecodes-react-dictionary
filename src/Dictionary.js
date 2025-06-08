import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleError(_error) {
    setResults(null);
    alert("Word not found, search for another.");
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleDictionaryResponse).catch(handleError);

    let pexelsApikey =
      "cfA7i04atNnQkGIcnh93r7P1ryABv9VMUh4cwoIZ8wZdABMvqSfUs5XH";
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApikey}` };
    axios.get(pexelsApiURL, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="form-title">What word do you want to look up? 🔎</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter a word to search"
              type="search"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            suggested words: sunset, yoga, love, happiness, nature
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
