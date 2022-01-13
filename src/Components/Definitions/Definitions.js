import React, { useState, useEffect } from "react";
import { Typography, Box, IconButton, Button } from "@material-ui/core";
import { ArrowBack, VolumeUp } from "@material-ui/icons";
import { History } from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./Definitions.css";

const Definitions = () => {
  //React-Router hooks
  const { userInput } = useParams();
  const history = useHistory();
  // React hooks
  const [definitions, setDefinitions] = useState("");
  // Fetch data from API
  useEffect(() => {
    const meanings = async () => {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
      );
      setDefinitions(response.data[0]);
      storeInLocalStorage(response.data);
    };
    meanings();
  }, []);
  // Storing the userInput and result for history
  const storeInLocalStorage = (definition) => {
    if (localStorage.getItem("wordFromStorage") === null) {
      localStorage.setItem("wordFromStorage", JSON.stringify(definition));
    } else {
      let dataFromLocalStorage = JSON.parse(
        localStorage.getItem("wordFromStorage")
      );
      dataFromLocalStorage.push(definition[0]);
      localStorage.setItem(
        "wordFromStorage",
        JSON.stringify(dataFromLocalStorage)
      );
    }
  };
  // Navigation to history page using React-Router
  const goToHistory = () => {
    history.push(`/HistoryPage`);
  };
  // To get the pronounciation audio
  const playAudio = () => {
    let audio = new Audio(definitions.phonetics[0].audio);
    audio.play();
  };

  return (
    // Definitions UI
    <Box className="Definitions-box">
      <IconButton className="back-arrow">
        <span class="pointer">
          <ArrowBack onClick={history.goBack}></ArrowBack>
        </span>
      </IconButton>
      <Button
        className="history-button"
        variant="contained"
        href="#contained-buttons"
        color="default"
        size="small"
        onClick={goToHistory}
        startIcon={<History />}
      >
        History
      </Button>
      <Box className="word-box">
        <Typography className="user-input" variant="h4">
          {userInput}{" "}
          <VolumeUp
            className="audio"
            onClick={() => {
              playAudio();
            }}
          ></VolumeUp>
        </Typography>
      </Box>
      {/* Showing the results got from API */}
      {definitions && (
        <div>
          <h4>Parts of speech:</h4>
          <div>{definitions.meanings[0].partOfSpeech}</div>

          <h4>Definition:</h4>

          <div>{definitions.meanings[0].definitions[0].definition}</div>

          <h4>Example:</h4>

          <div>{definitions.meanings[0].definitions[0].example}</div>
        </div>
      )}
    </Box>
  );
};

export default Definitions;
