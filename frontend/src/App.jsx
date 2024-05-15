import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../sanity/services/userServices'
import User from './components/User'
import Dashboard from './components/Dashboard'
import Genre from './components/genre'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState("")
  
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
      <User setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}></User>
      {loggedInUser !== "" ? <Dashboard loggedInUser={loggedInUser} user={user}/> : null}

      <Genre/>
      
    </>
  )
}

export default App
