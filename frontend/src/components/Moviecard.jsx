import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { updateFavoriteMovies, updateWishList } from "../../sanity/services/userServices"

 export default function Moviecard ({imgUrl, titleText, movieId, loggedInUser, user}) {
     const [userFavoriteMovies, setUserFavoriteMovies] = useState([])
     const [userWishlistedMovies, setUserWishlistedMovies] = useState([])
     useEffect(() => {
         let wishlistedMovies = []
         let favoriteMovies = []
         
        user.map(e => {
            if(e.username == loggedInUser){
                e.favoriteMovies?.map(f => {
                    favoriteMovies.push(f.movieId)
                })
                e.wishlistedMovie?.map(f => {
                    wishlistedMovies.push(f.movieId)
                })
            }
        })
        setUserFavoriteMovies(favoriteMovies)
        setUserWishlistedMovies(wishlistedMovies)
     },[user, loggedInUser])

    const handleFavoriteSubmit = async(id, title) => {
        let userId = ""
        user.map(u => {
            u.username == loggedInUser ? userId = u._id : null
        })
        if(!userFavoriteMovies?.includes(id) && userId != ""){
            setUserFavoriteMovies(id)
            const result = await updateFavoriteMovies(userId, id, title)
            if(result == "Success") {
                console.log("Success")
              } else {
                console.log(result)
              }
        }
    }

    const handleWishlistSubmit = async(id, title) => {
        let userId = ""
        user.map(u => {
            u.username == loggedInUser ? userId = u._id : null
        })
        if(!userWishlistedMovies?.includes(id) && userId != ""){
            setUserWishlistedMovies(id)
            const result = await updateWishList(userId, id, title)
            if(result == "Success") {
                console.log("Success")
              } else {
                console.log(result)
              }
        }
    }
    return (
        <article className="moviecardContent">
            <Link to={`https://www.imdb.com/title/${movieId}/`} target="_blanc">
            {imgUrl ? <img src={imgUrl}/> : <p>This movie has no current poster</p>}
            <p>{titleText}</p>
        </Link>
        {!userFavoriteMovies.includes(movieId) ? userWishlistedMovies.includes(movieId) ?
        null
        :
        <button onClick={() => handleFavoriteSubmit(movieId, titleText)}>Add to favorites</button> 
        : 
        <p>Favorites</p> }

        {!userWishlistedMovies.includes(movieId) ? userFavoriteMovies.includes(movieId) ?
        null
        :
        <button onClick={() => {handleWishlistSubmit(movieId, titleText)}}>Add to wishlist</button> 
        :
        <p>Wishlisted</p>}
        </article>
    )
}