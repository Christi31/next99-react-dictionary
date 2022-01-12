import React, { useState, useEffect } from "react";
import { Typography, Box, IconButton, Button } from "@material-ui/core";
import { ArrowBack, VolumeUp } from "@material-ui/icons";
import { History } from "@material-ui/icons";
import { PlayCircleFilled } from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import "./Definitions.css";
const Definitions = () => {
  const { userInput } = useParams();
  const history = useHistory();
  const [definitions, setDefinitions] = useState("");
  console.log(definitions);
  const playAudio = () => {
    let audio = new Audio(definitions.phonetics[0].audio);
    audio.play();
  };
  let a = [];
  useEffect(() => {
    const meanings = async () => {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
      );
      setDefinitions(response.data[0]);
    };
    meanings();
  }, []);

  return (
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
