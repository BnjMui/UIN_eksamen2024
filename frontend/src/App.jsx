import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../sanity/services/userServices'
import User from './components/User'
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'

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
      {/* {loggedInUser !== "" ? <Dashboard loggedInUser={loggedInUser} user={user}/> : null} */}
      {loggedInUser !== "" ? <Homepage loggedInUser={loggedInUser} user={user}/> : null}
      
    </>
  )
}

export default App