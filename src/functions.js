async function RandomWord() {
    let response = await fetch(
        "https://random-word-api.herokuapp.com/word?length=5"
    );
    let randomWord = await response.json();
    return randomWord[0];
}

export { RandomWord };
