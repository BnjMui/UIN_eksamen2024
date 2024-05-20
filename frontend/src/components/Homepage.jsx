import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"
import { Link } from "react-router-dom"

export default function Homepage({loggedInUser, user, fetchMovieById}) {
  const [wishList, setWishList] = useState([])
  
  let WlMovieId = []
    user?.map(e => {
        if(e.username == loggedInUser) {
            e.wishlistedMovie !== null ? 
            e.wishlistedMovie.map(m => {
                WlMovieId.push(m.movieId)
            }) : null
        }
    })

  useEffect(()=>{
    if(WlMovieId != 0){
      fetchMovieById(WlMovieId, setWishList)
    }
  },[loggedInUser, fetchMovieById])

  return (
    <main className="homepageContent">
        <h2>Hello, {loggedInUser}</h2>
        <section>
            <h3>Movies i would like to watch</h3>
            <p>{WlMovieId == 0 ? "No movies found in watchlist" : "You have these movies in your watchlist:"}</p>
            {wishList?.map((e, i) => {
                        return (
                            <Moviecard key={i} imgUrl={e.primaryImage.url} titleText={e.originalTitleText.text} movieId={e.id} loggedInUser={loggedInUser} user={user}/>
                        )
                    })}
        </section>
        <section className="watchWith">
            <h3>Im going to watch with...</h3>
            <ul>
              {user?.map((data, i) => {
                if (data.username !== loggedInUser){
                  return <li key={i}><Link to={`/dashboard/${data.username}`}> {data.username}</Link></li>
                }
              })}
            </ul>
        </section>
    </main>
  )
}