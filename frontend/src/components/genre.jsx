import React, { useState, useEffect } from 'react'
import createClient from '@sanity/client'

const Genre = () => {
  const [Genres, setGenres] = useState([])

  useEffect(() => {
    const client = createClient({
      projectId: 'oaeilve4',
      dataset: 'production',
    })

    //Henter sjangre fra Sanity
    client
      .fetch('*[_type == "genre"]')
      .then((data) => {
        setGenres(data)
      })
  }, [])

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {Genres.map((Genre) => (
          <li key={Genre._id}>{Genre.genre}</li>
        ))}
      </ul>
    </div>
  )
}

export default Genre

