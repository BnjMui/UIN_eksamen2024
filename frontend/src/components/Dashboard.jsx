import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"
import { useParams } from "react-router-dom"

export default function Dashboard({loggedInUser, user, fetchMovieById}){
    const [APIFM, setAPIFM] = useState([])
    const [APIWL, setAPIWL] = useState([])
    const {slug} = useParams()
    let GCommon = false

    //Mapping current users data. AKA favorite movies and wishlisted movies and favorite genre of logged in user.
    const currentUserWishlist = []
    let WlMovieId = []

    user?.map(e => {
        if(e.username == loggedInUser) {
            e.wishlistedMovie !== null ? 
            e.wishlistedMovie.map(m => {
                currentUserWishlist.push(m.movieId)
            }) : null
        }
    })

    {user?.map((e) => {
        if(e.username == {slug} && e.wishlistedMovie !== null) {
            e.wishlistedMovie.map(e => {
                if(currentUserWishlist.includes(e.movieId)) {
                    WlMovieId.push(e.movieId)
                }
            })
        }
    })} 

    //Favorite movies
    const currentUserFM = []
    let FmMovieId = []
    user?.map(e => {
        if(e.username == loggedInUser) {
            e.favoriteMovies !== null ?
            e.favoriteMovies.map(m => {
                currentUserFM.push(m.movieId)
            }) : null
        }
    })
    
    {user?.map((e) => {
        if(e.username == {slug} && e.favoriteMovies !== null) {
          e.favoriteMovies.map(e => {
                if(currentUserFM.includes(e.movieId)) {
                    FmMovieId.push(e.movieId)
                }
            })
        }
    })} 

    //Favorite Genres
    const currentUserFG = []
    user?.map(e => {
        if(e.username == loggedInUser) {
            e.favoriteGenres !== null ?
            e.favoriteGenres.map(g => {
                currentUserFG.push(g.genre)
            }) : null
        }
    })
    //Fetching movies from api.
    useEffect(()=>{
        if(currentUserFM != 0){
            fetchMovieById(FmMovieId, setAPIFM)
        }
        if(currentUserWishlist != 0){
            fetchMovieById(WlMovieId, setAPIWL)
        }
    },[])

    return (
        <main className="dashboardContent">
            <h2>Recomendations for {loggedInUser} and {slug}</h2>

            <section>
                <article className="dashboardContent">
                    <h3>Catch up!</h3>
                    <p>You have {WlMovieId.length} movies in common on your wishlists.</p>
                    {currentUserWishlist == 0 ? <p>No common movies in wishlist.</p> : null}
                    {APIWL?.map((e, i) => {
                            return (
                                <Moviecard key={i} imgUrl={e.primaryImage.url} titleText={e.originalTitleText.text} movieId={e.id} />
                            )
                        })} 
                </article>
                <article className="dashboardContent">
                    <h3>Go safe!</h3>
                    <p>You have {FmMovieId.length} favourite movies in common</p>
                        {currentUserFM == 0 ? <p>No favorite movies in common.</p> : null}
                        {APIFM?.map((e, i) => {
                            return (
                                <Moviecard key={i} imgUrl={e.primaryImage.url} titleText={e.originalTitleText.text} movieId={e.id} />
                            )
                        })}
                </article>
                <article className="dashboardContent">
                    <h3>Explore!</h3>
                    <p>You have these genres in common. Chech out what movies to choose from</p>
                    <ul>
                        {user?.map(e => {
                            if(e.username == slug && e.favoriteGenres !== null) {
                                return (e.favoriteGenres.map((g, i) => {
                                    if(currentUserFG.includes(g.genre)){
                                        GCommon = true
                                        return <li key={i}>{g.genre}</li>
                                    }
                                }))
                            }
                        })}
                    </ul>
                        {GCommon == false ? <p>No common genres found.</p> : null}
                </article>
            </section>
        </main>
    )
}