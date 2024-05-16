import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"

export default function Dashboard({loggedInUser, user}){
    const [amountFM, setAmountFM] = useState(0)
    const [amountWishlist, setAmountWishlist] = useState(0)
    const [APIFM, setAPIFM] = useState([])
    const [APIWL, setAPIWL] = useState([])
    
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
        if(e.username == "Martinius" && e.wishlistedMovie !== null) {
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
        if(e.username == "Martinius" && e.favoriteMovies !== null) {
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
    //Counters for how many items in common.
    useEffect(()=>{
        fetchMovieById(FmMovieId, setAPIFM, setAmountFM)
        fetchMovieById(WlMovieId, setAPIWL, setAmountWishlist)
    },[])

    //Function for API-reference

    const fetchMovieById = async(e, API, Amount) => {
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
        if(Amount !== null){
            Amount(result.entries)
        }
    } catch (error) {
        console.error(error)
        }
    }

    return (
        <>
        <h1>Recomendations for user1 and user2</h1>

        <section>
            <article>
                <h3>Catch up!</h3>
                <p>You have {amountWishlist} movies in common on your wishlists.</p>
                {amountWishlist === 0 ? <p>No common movies in wishlist.</p> : null}
                {APIWL?.map((e, i) => {
                        return (
                            <Moviecard key={i} imgUrl={e.primaryImage.url} titleText={e.originalTitleText.text} />
                        )
                    })} 
            </article>
            <article>
                <h3>Go safe!</h3>
                <p>You have {amountFM} favourite movies in common</p>
                    {amountFM === 0 ? <p>No favorite movies in common.</p> : null}
                    {APIFM?.map((e, i) => {
                        return (
                            <Moviecard key={i} imgUrl={e.primaryImage.url} titleText={e.originalTitleText.text} />
                        )
                    })}
            </article>
            <article>
                <h3>Explore!</h3>
                <p>You have these genres in common. Chech out what movies to choose from</p>
                <ul>
                    {user?.map((e, i) => {
                        if(e.username !== loggedInUser && e.favoriteGenres !== null) {
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

        </>
    )
}