import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"
import { Link } from "react-router-dom"

export default function Homepage({loggedInUser, user}) {
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
  
  const fetchMovieById = async(e) => {
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
      
      setWishList(result.results)
  } catch (error) {
    console.error(error)
      }
  }

  useEffect(()=>{
    if(WlMovieId != 0){
      fetchMovieById(WlMovieId)
    }
  },[])

  return (
    <main>
        <h2>Hello, {loggedInUser}</h2>
        <article>
            <h3>Movies i would like to watch</h3>
        </article>
        <article>
            
            <p>{WlMovieId == 0 ? "No movies found in watchlist" : "You have these movies in your watchlist"}</p>
            {wishList?.map((e, i) => {
              console.log(i)
                        return (
                            <Moviecard key={i} imgUrl={e.primaryImage.url} titleText={e.originalTitleText.text} />
                        )
                    })}
        </article>
        <article>
            <h3>Im going to watch with...</h3>
            {user?.map((data, i) => {
            if (data.username !== loggedInUser){
              return <Link key={i} to={`/dashboard/${data.username}`}>{data.username}</Link>
            }
          })}
        </article>
    </main>
  )
}