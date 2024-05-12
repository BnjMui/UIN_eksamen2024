import { useState } from 'react'
import Genre from './components/genre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Genre/>
    </>
  )
}

export default App
