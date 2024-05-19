import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../sanity/services/userServices'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'
import Genre from './components/Genre'
import GenreMovie from './components/GenreMovie'


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

  const fetchMovieById = async(e, API) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${e}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '83b786ce90mshb478f97f6df797cp1f84c1jsn1e5edab39268',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    }

try {
  const response = await fetch(url, options)
  const result = await response.json()
  console.log(result)
    API(result.results)
} catch (error) {
    console.error(error)
    }
}



  return (
    <>
    <Layout loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}>
      <Routes>
        <Route path='/' element={<Homepage loggedInUser={loggedInUser} user={user} fetchMovieById={fetchMovieById}/>}/>
        <Route path='/dashboard/:slug' element={<Dashboard loggedInUser={loggedInUser} user={user} fetchMovieById={fetchMovieById}/>}/>
        <Route path='/genres' element={<Genre loggedInUser={loggedInUser} user={user}/>}/>
        <Route path='/genres/:slug' element={<GenreMovie loggedInUser={loggedInUser} user={user} fetchMovieById={fetchMovieById}/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App