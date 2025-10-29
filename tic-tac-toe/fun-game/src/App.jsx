import { useState } from 'react'
import './App.css'
import Square from './Components/Square'
import Board from './Components/Board'

function App() {
  const[board, setboard]= useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true)

 const handleClick= (index) => {
  if (board[index]){
    return
  }
  const newBoard =[...board]
  newBoard[index] = isXNext? 'X' :'O'
  setboard(newBoard)
  setIsXNext(!isXNext)

  }
  const nextPlayer = isXNext ? 'X' : 'O'

  return (
    <>
    <h1>Tic-Tac-Toe</h1>
    <p>Next player: {nextPlayer}</p>
    <Board board={board} onSquareClick={handleClick}/>
    </>
  )
}

export default App
