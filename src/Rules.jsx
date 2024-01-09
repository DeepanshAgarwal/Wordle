import "./Rules.css";

export default function Rules() {
    return (
        <div className="rules">
            <h1>How to Play</h1>
            <h2>Guess the Wordle in 6 tries</h2>
            <ul>
                <li>Each guess must be a valid 5-letter word.</li>
                <li>
                    The color of the tiles will change to show how close your
                    guess was to the word.
                </li>
                <li>
                    If a letter is correct and at right position, the tile color
                    will be green.
                </li>
                <li>
                    If a letter is correct but at wrong position, the tile color
                    will be orange.
                </li>
                <li>
                    If a letter is not present in the word, the tile color will
                    be grey.
                </li>
            </ul>
        </div>
    );
}
