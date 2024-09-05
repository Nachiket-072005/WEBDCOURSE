import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h4>count is {count}</h4>
        <button onClick={() => setCount((count) => count + 1)}>Update Count</button>
      </div>
    </>
  )
}

export default App
