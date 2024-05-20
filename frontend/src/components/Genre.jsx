import React, { useState, useEffect } from 'react'
import {updateFavoriteGenres} from '../../sanity/services/userServices'
import { fetchGenres } from '../../sanity/services/genreServices'
import { Link } from 'react-router-dom'

export default function Genre({loggedInUser, user}) {
  const [genres, setGenres] = useState([])
  const [favoriteGenre, setFavoriteGenre] = useState([])

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenres() // Bruker getGenres-funksjonen for å hente sjangrene
        setGenres(data) // Oppdater sjangrene
      } catch (error) {
        console.error('Feil ved henting av sjangre:', error)
      }
    }

    getGenres() //Kaller funksjonen når komponenten rendres

  }, [])

  const handleSubmit = async(e) => {
    let userId = ""
    user.map(u => {
      if(u.username == loggedInUser){
        userId = u._id
      }
    })
    if(!favoriteGenre.includes(e)){
      setFavoriteGenre((prevGenres) => [...prevGenres, e]) //Her fikk vi hjelp av chatGPT til å produsere setFavoriteGenre funksjonen man ser på denne linjen.
      const result = await updateFavoriteGenres(userId, e)
      if(result == "Success") {
        console.log("Success")
      } else {
        console.log(result)
      }
    }
  }
  useEffect(() => {
    let userFavoriteGenres = []
    user?.map(e => {
      if(e.username == loggedInUser && e.favoriteGenres)
        e.favoriteGenres.map(g => {
          userFavoriteGenres.push(g.genre)
        })
    })
    setFavoriteGenre(userFavoriteGenres)
}, [loggedInUser, user])
  return (
    <section className='genreContent'>
      <h2>Sjangre</h2>
      <ul className='genreList'>
      {genres?.map((e, i) => (
          <li key={i} >
            <Link to={`/genres/${e.genre}`}>
              <p>{e.genre}</p>
            </Link>
            {favoriteGenre.includes(e.genre) ? <p>Favorite genre</p> : <button onClick={() => handleSubmit(e.genre)}>Add to favorites</button>}
              
          </li>
        ))}
      </ul>
    </section>
  )
}
