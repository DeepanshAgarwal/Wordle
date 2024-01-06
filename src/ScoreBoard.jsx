import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import "./ScoreBoard.css";

export default function ScoreBoard({ correct, correctRight, wrong }) {
    let style = {
        py: 0,
        width: "100%",
        // maxWidth: 360,
        borderRadius: 2,
        border: "2px solid",
        borderColor: "black",
        backgroundColor: "transparent",
        // fontSize: "50px",
        padding: "10px",
    };

    function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    return (
        <div className="scoreboard">
            <h1>Score Board</h1>

            <List sx={style}>
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "20px" }}>
                                All Correct Letters:
                            </Typography>
                        }
                    />
                </ListItem>
                {removeDuplicates(correct).map((letter) => (
                    <div className="correct">{letter}</div>
                ))}
                <Divider variant="middle" component="li" />
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "20px" }}>
                                Correct and Rightly Placed:
                            </Typography>
                        }
                    />
                </ListItem>
                {correctRight.map((letter) => (
                    <div className="correctRight">{letter}</div>
                ))}
                <Divider variant="middle" component="li" />
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "20px" }}>
                                Wrong:
                            </Typography>
                        }
                    />
                </ListItem>
                {removeDuplicates(wrong).map((letter) => (
                    <div className="wrong">{letter.toUpperCase()}</div>
                ))}
                <Divider variant="middle" component="li" />
            </List>
        </div>
    );
}
