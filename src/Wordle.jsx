import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Wordle.css";

export default function Wordle({
    inputValue,
    updateInputValue,
    check,
    guessesLeft,
    playAgain,
    status,
    isWinning,
}) {
    return (
        <div className="wordle">
            <h1>Guesses Left: {guessesLeft}</h1>
            <TextField
                id="outlined-basic"
                label="Guess"
                variant="outlined"
                value={inputValue}
                onChange={(e) => updateInputValue(e.target.value)}
            />
            <Button id="check" variant="contained" onClick={check}>
                Check
            </Button>
            <Button id="check" variant="contained" onClick={playAgain}>
                Play Again
            </Button>
            <p style={{ color: isWinning ? "green" : "red" }}>{status}</p>
        </div>
    );
}
