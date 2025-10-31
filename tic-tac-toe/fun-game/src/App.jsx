import { useState } from 'react'
import './App.css'
import Square from './Components/Square'
import Board from './Components/Board'

function App() {
  const[board, setboard]= useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true)

  const checkWinner =()=>{
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i=0; i< winningPatterns.length;i++){
      const [a,b,c]= winningPatterns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; 
      }
    }
    return null; 

  }

  const winner = checkWinner();

 const handleClick= (index) => {
  if (board[index]|| winner){
    return
  }
  const newBoard =[...board]
  newBoard[index] = isXNext? 'X' :'O'
  setboard(newBoard)
  setIsXNext(!isXNext)

  }
  const nextPlayer = isXNext ? 'X' : 'O'
  const resetGame = () => {
    setboard(Array(9).fill(null));
    setIsXNext(true);
  };

  let status = "";

if (winner) {
  status = "Winner player is: " + winner;
} else if (board.every((sq) => sq !== null)) {
  status = "Draw!";
} else {
  status = "Next Player: " + (isXNext ? "X" : "O");
}

  return (
    <>
    <h1>Tic-Tac-Toe</h1>
    <p>Next player: {nextPlayer}</p>
    <Board board={board} onSquareClick={handleClick}/>
    <button className="restart-btn" onClick={resetGame}>
        Restart Game
      </button>
      <p>{status}</p>
    </>
  )
}

export default App
