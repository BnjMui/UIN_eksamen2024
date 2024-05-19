import React, { useState, useEffect } from 'react'
import {updateFavoriteGenres} from '../../sanity/services/userServices'
import { fetchGenres } from '../../sanity/services/genreServices'

export default function Genre({loggedInUser, user}) {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenres() // Bruker getGenres-funksjonen for å hente sjangrene
        console.log(data)
        setGenres(data) // Oppdater sjangrene
      } catch (error) {
        console.error('Feil ved henting av sjangre:', error)
      }
    }

    getGenres() //Kaller funksjonen når komponenten rendres

  }, [])

  const handleSubmit = async(e, user) => {
    let userId = ""
    user.map(u => {
      if(u.username == loggedInUser){
        userId = u._id
      }
    })
    const result = await updateFavoriteGenres(userId, e)
    if(result == "Success") {
      console.log("Success")
    } else {
      console.log(result)
    }
  }
  return (
    <section>
      <h2>Sjangre</h2>
      <ul>
      {genres?.map((genre, index) => (
          <li key={index} >
            <p>{genre.genre}</p>
            <button onClick={() => handleSubmit(genre.genre, user)}>Add to favorites</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
