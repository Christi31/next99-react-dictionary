import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./HistoryPage.css";

const HistoryPage = () => {
  const history = useHistory();
  const [histories, setHistories] = useState(
    JSON.parse(localStorage.getItem("wordFromStorage"))
  );
  const goToSearch = () => {
    history.push(`/`);
  };
  const deleteHistory = () => {
    setHistories(undefined);
    localStorage.removeItem("wordFromStorage");
  };
  return (
    <div className="history-page-box">
      {histories &&
        histories.map((a, index) => (
          <div className="borderStyle" key={index}>
            <h2 class="capitalize">{a.word}</h2>
            <h4>Parts of speech:</h4>
            <div>{a.meanings[0].partOfSpeech}</div>

            <h4>Definition:</h4>

            <div>{a.meanings[0].definitions[0].definition}</div>

            <h4>Example:</h4>

            <div>{a.meanings[0].definitions[0].example}</div>
          </div>
        ))}
      {!histories && <h2>there is no data to display.</h2>}
      <div className="buttons">
        <Button
          variant="contained"
          href="#contained-buttons"
          color="default"
          size="large"
          className="back-button"
          onClick={goToSearch}
        >
          Back to Search
        </Button>
        <Button
          variant="contained"
          href="#contained-buttons"
          color="secondary"
          size="large"
          className="delete-button"
          onClick={deleteHistory}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default HistoryPage;
