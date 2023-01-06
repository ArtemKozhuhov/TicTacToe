import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { winComb } from "./WinComb";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((value, idx) => {
        if (idx == square && value == "") {
          return player;
        }
        return value;
      })
    );
  };

  const checkWin = () => {
    winComb.forEach((currWinComb) => {
      const firstPlayer = board[currWinComb[0]];
      if (firstPlayer == "") return;
      let foundWinning = true;
      currWinComb.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinning = false;
        }
      });
      if (foundWinning) {
        setResult({ winner: player, state: "Win" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        id="board"
        className="w-96 h-96 border-solid border-2 border-black bg-sky-300 flex flex-col"
      >
        <div id="row" className="flex basis-2/6 flex-row">
          <Square
            value={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            value={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            value={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div id="row" className="flex basis-2/6 flex-row">
          <Square
            value={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            value={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            value={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div id="row" className="flex basis-2/6 flex-row">
          <Square
            value={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            value={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            value={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
