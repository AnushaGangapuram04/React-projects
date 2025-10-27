import { use, useState } from 'react'
import './App.css'
import Square from './Components/Square'
import Board from './Components/Board'

function App() {
  const[board, setboard]= useState();
  
  return (
    <>
    <Board/>
    </>
  )
}

export default App
