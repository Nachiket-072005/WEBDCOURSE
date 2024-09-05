import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Nachiket')

  const handleClick = () => {
    alert("You clicked me!")
  }

  const handleMouseOver = () => {
    alert("You entered the red div!")
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me!</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div!
      </div> */}

      <input type="text" value={name} onChange={handleChange}/>
    </>
  )
}

export default App
