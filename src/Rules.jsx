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
            </ul>
        </div>
    );
}
