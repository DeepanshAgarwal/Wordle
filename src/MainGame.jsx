import React, { useState, useEffect } from "react";
import Rules from "./Rules";
import Wordle from "./Wordle";
import ScoreBoard from "./ScoreBoard";
import "./MainGame.css";
import { RandomWord } from "./functions";

export default function MainGame() {
    //State Variables
    let [inputValue, setInputValue] = useState("");
    let [guessesLeft, setGuessesLeft] = useState(6);
    let [gameWord, setGameWord] = useState("");
    let [correct, setCorrect] = useState([]);
    let [correctRight, setCorrectRight] = useState(["?", "?", "?", "?", "?"]);
    let [wrong, setWrong] = useState([]);
    let [status, setStatus] = useState("");
    let [isWinning, setIsWinning] = useState(false);
    let [guessedWords, setGuessedWords] = useState([]);

    useEffect(() => {
        RandomWord().then((word) => setGameWord(word));
    }, []);

    useEffect(() => {
        console.log("New Word: ", gameWord);
    }, [gameWord]);

    function updateInputValue(data) {
        setInputValue(data);
    }

    function check() {
        setStatus("");
        if (guessesLeft <= 1) {
            console.log("No more guesses left!");
            setIsWinning(false);
            setGuessesLeft(0);
            setStatus(
                "No more guesses left!\nCorrect Word was " +
                    "'" +
                    gameWord +
                    "'"
            );
        } else {
            if (inputValue.length !== 5) {
                console.log("Please enter a 5 letter word!");
                setIsWinning(false);
                setStatus("Please enter a 5 letter word!");
            } else {
                if (inputValue.toLowerCase() === gameWord) {
                    console.log("Correct Guess");
                    setGuessesLeft(0);
                    setIsWinning(true);
                    let newGuessedWords = [...guessedWords, inputValue];
                    setGuessedWords(newGuessedWords);
                    console.log("Guessed Words: ", newGuessedWords);
                    setStatus("Congratulations! You've guessed the word!");
                } else {
                    console.log("Wrong Guess: " + inputValue.toUpperCase());
                    setIsWinning(false);
                    let newGuessedWords = [...guessedWords, inputValue];
                    setGuessedWords(newGuessedWords);
                    console.log("Guessed Words: ", newGuessedWords);
                    setGuessesLeft(guessesLeft - 1);
                }
                updateAllCorrect();
                updateCorrectRight();
                updateWrong();
            }
        }
        setInputValue("");
    }

    function updateAllCorrect() {
        //check and render if letter is correct
        for (let i = 0; i < inputValue.length; i++) {
            for (let j = 0; j < gameWord.length; j++) {
                if (inputValue[i].toUpperCase() === gameWord[j].toUpperCase()) {
                    console.log(
                        "Correct Letter: " + inputValue[i].toUpperCase()
                    );
                    setCorrect((prevCorrect) => [
                        ...prevCorrect,
                        inputValue[i].toUpperCase(),
                    ]);
                }
            }
        }
    }

    function updateCorrectRight() {
        //check and render if letter is correct and in the right place
        for (let i = 0; i < gameWord.length; i++) {
            if (inputValue[i].toUpperCase() === gameWord[i].toUpperCase()) {
                setCorrectRight((prevCorrectRight) =>
                    prevCorrectRight.map((letter, index) => {
                        if (index === i) {
                            return inputValue[i].toUpperCase();
                        } else {
                            return letter;
                        }
                    })
                );
            }
        }
    }

    function updateWrong() {
        //check and render if letter is wrong
        setWrong((prevWrong) => {
            let arr = inputValue
                .split("")
                .filter((item) => !gameWord.split("").includes(item));
            return [...prevWrong, ...arr];
        });
    }

    function playAgain() {
        // resets all variables and generate new random word
        setInputValue("");
        setGuessesLeft(6);
        setCorrect([]);
        setCorrectRight(["?", "?", "?", "?", "?"]);
        setWrong([]);
        setStatus("");
        setIsWinning(false);
        setGuessedWords([]);
        RandomWord().then((word) => setGameWord(word));
    }

    return (
        <>
            <h1>WORDLE</h1>
            <div className="mainGame">
                <Rules />
                <Wordle
                    inputValue={inputValue}
                    updateInputValue={updateInputValue}
                    check={check}
                    guessesLeft={guessesLeft}
                    playAgain={playAgain}
                    status={status}
                    isWinning={isWinning}
                />
                <ScoreBoard
                    correct={correct}
                    correctRight={correctRight}
                    wrong={wrong}
                    guessedWords={guessedWords}
                />
            </div>
        </>
    );
}
