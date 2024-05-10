import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../sanity/services/userServices'

function App() {
  const [user, setUser] = useState(null)

  const getAllUsers = async () => {
    const data = await fetchAllUsers()
    console.log(data)
    setUser(data)
  }
  useEffect(()=>{
    getAllUsers()
  },[])
  //console.log(user)
  return (
    <>
    
    </>
  )
}

export default App
