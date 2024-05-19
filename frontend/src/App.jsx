import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../sanity/services/userServices'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'
import Genre from './components/Genre'


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
  return (
    <>
    <Layout loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}>
      <Routes>
        <Route path='/' element={<Homepage loggedInUser={loggedInUser} user={user}/>}/>
        <Route path='/dashboard/:slug' element={<Dashboard loggedInUser={loggedInUser} user={user}/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App