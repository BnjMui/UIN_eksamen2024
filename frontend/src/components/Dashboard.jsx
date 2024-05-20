import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"
import { Link, useParams } from "react-router-dom"

export default function Dashboard({loggedInUser, user, fetchMovieById}){
    const [APIFM, setAPIFM] = useState([])
    const [APIWL, setAPIWL] = useState([])
    const [APIComparedFM, setAPIComparedFM] = useState([])
    const [APIComparedWL, setAPIComparedWL] = useState([])
    const {slug} = useParams()
    let GCommon = false

    //Mapping current user and compared users data. AKA favorite movies and wishlisted movies and favorite genre of logged in user.
    //Wishlisted movies
    let currentUserWishlist = []
    let WlMovieId = []
    user?.map(e => {
        if(e.username == loggedInUser && e.wishlistedMovie !== null) {
            e.wishlistedMovie.map(m => {
                currentUserWishlist.push(m.movieId)
            })
        }
        if(e.username == slug && e.wishlistedMovie != null) {
            e.wishlistedMovie.map(e => {
                    if(currentUserWishlist.includes(e.movieId)) {
                        WlMovieId.push(e.movieId)
                    }
                })
            }
            
        })
    //Favorite movies
    let currentUserFM = []
    let FmMovieId = []
    user?.map(e => {
        if(e.username == loggedInUser && e.favoriteMovies != null) {
            e.favoriteMovies.map(m => {
                currentUserFM.push(m.movieId)
            })
        }
        if(e.username == slug && e.favoriteMovies !== null) {
          e.favoriteMovies.map(e => {
                if(currentUserFM.includes(e.movieId)) {
                    FmMovieId.push(e.movieId)
                }
            })
        }
    })
    //A-krav
    //Users favorites compared
    let comparedFM = []
    user?.map(e => {
        if(e.username == slug) {
            e.wishlistedMovie.map(w => {
                if(currentUserFM.includes(w.movieId)) {
                    !WlMovieId.includes(w.movieId) ?
                    comparedFM.push(w.movieId)
                    :null
                }
            })
        }
    })
    //Users wishlist compared
    let comparedWL = []
    user?.map(e => {
        if(e.username == loggedInUser) {
            e.wishlistedMovie.map(w => {
                if(currentUserWishlist.includes(w.movieId)) {
                    !FmMovieId.includes(w.movieId) ?
                    comparedWL.push(w.movieId)
                    :null
                }
            })
        }
    })
    console.log(comparedWL)
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
        if(FmMovieId != 0){
            fetchMovieById(FmMovieId, setAPIFM)
        }
        if(WlMovieId != 0){
            fetchMovieById(WlMovieId, setAPIWL)
        }
        if(comparedFM != 0){
            fetchMovieById(comparedFM, setAPIComparedFM)
        }
        if(comparedWL != 0){
            fetchMovieById(comparedWL, setAPIComparedWL)
        }
    },[slug, fetchMovieById])
    return (
        <main className="dashboardContent">
            <h2>Recomendations for {loggedInUser} and {slug}</h2>

            
                <section>
                    <h3>Catch up!</h3>
                    <p>You have {WlMovieId.length} movies in common on your wishlists.</p>
                    {currentUserWishlist.length == 0 ? <p>No common movies in wishlist.</p> : null}
                    {APIWL?.map((e, i) => {
                            return (
                                <Moviecard key={i} imgUrl={e.primaryImage?.url} titleText={e.originalTitleText.text} movieId={e.id} loggedInUser={loggedInUser} user={user}/>
                            )
                        })} 
                </section>
                <section>
                    <h3>Go safe!</h3>
                    <p>You have {FmMovieId.length} favourite movies in common</p>
                        {currentUserFM.length == 0 ? <p>No favorite movies in common.</p> : null}
                        {APIFM?.map((e, i) => {
                            return (
                                <Moviecard key={i} imgUrl={e.primaryImage?.url} titleText={e.originalTitleText.text} movieId={e.id} loggedInUser={loggedInUser} user={user}/>
                            )
                        })}
                </section>
                <section>
                    <h3>Explore!</h3>
                    <p>You have these genres in common. Chech out what movies to choose from</p>
                    <ul>
                        {user?.map(e => {
                            if(e.username == slug && e.favoriteGenres !== null) {
                                return (e.favoriteGenres.map((g, i) => {
                                    if(currentUserFG.includes(g.genre)){
                                        GCommon = true
                                        return <li key={i}><Link to={`/genres/${g.genre}`}>
                                        <p>{g.genre}</p>
                                      </Link></li>
                                    }
                                }))
                            }
                        })}
                    </ul>
                        {GCommon == false ? <p>No common genres found.</p> : null}
                </section>
                <section>
                    <h3>Teach eachother</h3>
                    <p>Movies in your favorites that {slug} has in their wishlist, take a look!</p>
                    {APIComparedFM?.map((e, i) => {
                            return (
                                <Moviecard key={i} imgUrl={e.primaryImage?.url} titleText={e.originalTitleText.text} movieId={e.id} loggedInUser={loggedInUser} user={user}/>
                            )
                        })}
                    <p>Movies in your wishlist that, {slug} has in their favorites</p>
                        {APIComparedWL?.map((e, i) => {
                            return (
                                <Moviecard key={i} imgUrl={e.primaryImage?.url} titleText={e.originalTitleText.text} movieId={e.id} loggedInUser={loggedInUser} user={user}/>
                            )
                        })}
                </section>
        </main>
    )
}