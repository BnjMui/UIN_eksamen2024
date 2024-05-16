import React, { useState, useEffect } from 'react'
import { getGenres } from '../../sanity/services/userServices'

const Genres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres() // Bruker getGenres-funksjonen for å hente sjangrene
        console.log(data)
        setGenres(data) // Oppdater sjangrene
      } catch (error) {
        console.error('Feil ved henting av sjangre:', error)
      }
    }

    fetchGenres() //Kaller funksjonen når komponenten rendres
  }, [])

  return (
    <section>
      <h2>Sjangre</h2>
      <ul>
      {genres?.map((genre, index) => (
          <li key={index}>{genre.genre}</li>
        ))}
      </ul>
    </section>
  )
}

export default Genres
