import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import { History } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./MainPage.css";
const MainPage = () => {
  const [userInput, setUserInput] = useState("");
  const history = useHistory();
  const searchHandler = (event) => {
    setUserInput(event.target.value);
    console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const validatedUserInput = userInput.trim();
    if (!validatedUserInput || validatedUserInput.split(" ").length > 1) {
      setUserInput("");
      return;
    }
    console.log("search word");
    history.push(`/search/${userInput}`);
    setUserInput("");
  };
  return (
    <Box className="mainpage-box">
      <Typography class="heading">Dictionary</Typography>
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
      {/* <div class="history-button">
        <Button
          variant="contained"
          href="#contained-buttons"
          color="default"
          size="large"
          startIcon={<History />}
        >
          History
        </Button>
      </div> */}
    </Box>
  );
};

export default MainPage;
