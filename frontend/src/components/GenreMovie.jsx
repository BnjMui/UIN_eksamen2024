import React, { useState, useEffect } from 'react'
import { fetchMovies } from '../../sanity/services/genreServices'
import Moviecard from './Moviecard'

export default function GenreMovie() {
    const [genreMovies, setGenreMovies] = useState([])

    const getMovies = async () => {
        try {
            const data = await fetchMovies()
            console.log(data)
            setGenreMovies(data)
        } catch (error) {
            console.error('Feil:', error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <section>
            <h2>Movies in the Genre</h2>
        </section>
    )
}
