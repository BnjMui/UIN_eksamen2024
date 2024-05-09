import { useState } from 'react'

function App() {
  const [genre, setGenre] = useState([])

  const getGenres = async() => {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres'
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
    
  } catch (error) {
    console.error(error)
  }
  }
  getGenres()

  return (
    <>
    </>
  )
}

export default App
