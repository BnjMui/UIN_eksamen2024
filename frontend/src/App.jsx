import { useState } from 'react'
import Dashboard from './components/Dashboard'
import './styles/style.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard/>
    </>
  )
}

export default App
