import { useState } from 'react'

const TURNS = {
  x: 'x',
  o: 'o'
}

const Square = ({ children, updateBoard, index }) => {
  return (
    <div className='square'>
      { children }
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(['x', 'x', 'o', 'o', 'x', 'o', 'x', 'x', 'o'])

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square key={index} index={index}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
    </main>
    
  )
}

export default App
