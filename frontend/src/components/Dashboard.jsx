import { useEffect, useState } from "react"
import { favoriteGenres } from "../../../backend/schemaTypes/favoriteGenres"

export default function Dashboard({loggedInUser, user}){
    //console.log(loggedInUser)
    const [amountFM, setAmountFM] = useState(0)
    const [amountWishlist, setAmountWishlist] = useState(0)
    
    //Mapping current users data. AKA favorite movies and wishlisted movies and favorite genre of logged in user.
    const currentUserWishlist = []
    user?.map(e => {
        if(e.username == loggedInUser) {
            e.wishlistedMovie !== null ? 
            e.wishlistedMovie.map(m => {
                currentUserWishlist.push(m.movieTitle)
            }) : null
        }
    })
    const currentUserFM = []
    user?.map(e => {
        if(e.username == loggedInUser) {
            e.favoriteMovies !== null ?
            e.favoriteMovies.map(m => {
                currentUserFM.push(m.movieTitle)
            }) : null
        }
    })

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
    let letAmountWishlist = 0
    let letAmountFM = 0
    let WLcommon = false
    let FMCommon = false
    let GCommon = false
    useEffect(()=>{
        setAmountFM(letAmountFM)
        setAmountWishlist(letAmountWishlist)
    },[letAmountFM, letAmountWishlist])
    
    return (
        <>
        <h1>Recomendations for user1 and user2</h1>

        <section>
            <article>
                <h3>Catch up!</h3>
                <p>You have {amountWishlist} movies in common on your wishlists.</p>
                {user?.map((e, i) => {
                    if(e.username !== loggedInUser && e.wishlistedMovie !== null) {
                      return (<article key={i}>  {e.wishlistedMovie.map((e, i) => {
                            if(currentUserWishlist.includes(e.movieTitle)) {
                                letAmountWishlist ++
                                WLcommon = true
                               return <p key={i}>{e.movieTitle}</p>
                            }
                        })}
                    </article>)
                    }
                })} {WLcommon == false ? <p>No common movies in wishlist.</p> : null}
            </article>
            <article>
                <h3>Go safe!</h3>
                <p>You have {amountFM} favourite movies in common</p>
                {user?.map((e, i) => {
                    if(e.username == "Martinius" && e.favoriteMovies !== null) {
                      return (<article key={i}>  {e.favoriteMovies.map((e, i) => {
                            if(currentUserFM.includes(e.movieTitle)) {
                                letAmountFM ++
                                FMCommon = true
                                console.log(amountFM)
                               return <p key={i}>{e.movieTitle}</p>
                            }else return null
                        })}
                    </article>)
                    }
                })} {FMCommon == false ? <p>No favorite movies in common.</p> : null}
            </article>
            <article>
                <h3>Explore!</h3>
                <p>You have these genres in common. Chech out what movies to choose from</p>
                {GCommon == false ? <p>No common genres found.</p> : null}
                <ul>
                    {user?.map((e, i) => {
                        if(e.username !== loggedInUser && e.favoriteGenres !== null) {
                            e.favoriteGenres.map((g, i) => {
                                if(currentUserFG.includes(g.genre)){
                                    GCommon = true
                                    console.log(g.genre)
                                    return <li key={i}>{g.genre}</li>
                                }
                            })
                        }
                    })}
                </ul>
            </article>
        </section>

        </>
    )
}