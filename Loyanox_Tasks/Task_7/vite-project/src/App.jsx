import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="all">
      <div className="text">
      <h3>{count}</h3>
      </div>
      <div className="btn">
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease count
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase count
        </button>
      </div>
      </div>
    </>
  )
}

export default App
