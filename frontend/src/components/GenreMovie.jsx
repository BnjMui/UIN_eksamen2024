import React, { useState, useEffect } from 'react'
import { fetchMovies } from '../../sanity/services/genreServices'
import Moviecard from './Moviecard'
import { useParams } from 'react-router-dom'

export default function GenreMovie({fetchMovieById, loggedInUser, user}) {
    const {slug} = useParams()
    const [genreMovies, setGenreMovies] = useState([])
    const [movieIdApi, setMovieIdApi] = useState([])
    const [ApiMovie, setApiMovie] = useState([])

    const getMovies = async () => {
        try {
            const data = await fetchMovies()
            //console.log(data)
            setGenreMovies(data)
        } catch (error) {
            console.error('Feil:', error)
        }
    }
    useEffect(() => {
        getMovies()
    },[])
    useEffect(() => {
        let movieId = []
        genreMovies?.map(e => {
            e.genre.map(g => {
                if(g.genre == slug){
                    movieId.push(e.movieId)
                }
            })
        })
        setMovieIdApi(movieId)
    }, [genreMovies, slug])

    useEffect(() => {
        if (movieIdApi.length > 0) {
            fetchMovieById(movieIdApi, setApiMovie)
        }
    }, [movieIdApi, fetchMovieById])
    return (
        <section className='genreMovies'>
            <h2>Showing {slug} movies</h2>
            {ApiMovie.map((e, i) => {
                return(
                    <Moviecard key={i} imgUrl={e.primaryImage?.url} titleText={e.originalTitleText.text} movieId={e.id} loggedInUser={loggedInUser} user={user}/>
                )
            })}
        </section>
    )
}
