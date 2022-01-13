import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import { History } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  const [userInput, setUserInput] = useState("");
  const history = useHistory();
  // Event handlers
  const searchHandler = (event) => {
    setUserInput(event.target.value);
  };
  const goToHistory = () => {
    history.push(`/HistoryPage`);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // Validating UserInput
    const validatedUserInput = userInput.trim();
    if (!validatedUserInput || validatedUserInput.split(" ").length > 1) {
      setUserInput("");
      return;
    }
    // Navigation using React-Router
    history.push(`/search/${userInput}`);
    setUserInput("");
  };
  return (
    // Main-page UI with Material ui
    <Box className="mainpage-box">
      <Typography class="heading">Dictionary</Typography>
      {/* Form Field for user input and submitting data */}
      <form onSubmit={submitHandler}>
        <TextField
          id="standard-basic"
          label="Enter a word here"
          variant="standard"
          value={userInput}
          onChange={searchHandler}
        ></TextField>
        <p>
          <input type="submit" value="Search" class="submit-btn" />
        </p>
      </form>
      {/* Naviagting to History Page */}
      <div class="history-button">
        <Button
          variant="contained"
          href="#contained-buttons"
          color="default"
          size="large"
          onClick={goToHistory}
          startIcon={<History />}
        >
          History
        </Button>
      </div>
    </Box>
  );
};

export default MainPage;
