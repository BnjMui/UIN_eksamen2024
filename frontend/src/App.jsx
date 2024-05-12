import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../sanity/services/userServices'
import User from './components/User'

function App() {
  const [user, setUser] = useState(null)

  const getAllUsers = async () => {
    const data = await fetchAllUsers()
    setUser(data)
  }
  useEffect(()=>{
    getAllUsers()
  },[])
  //console.log(user)
  return (
    <>
      <User></User>
    </>
  )
}

export default App
