import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"

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
    fetchMovieById(WlMovieId)
  },[])

  return (
    <main>
        <h2>Hello, {loggedInUser}</h2>
        <article>
            <h4>Movies i would like to watch</h4>
        </article>
        <article>
            <p>You have these movies in your watchlist:</p>
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
            if (data.username !== loggedInUser)
            return <p key={i} >{data.username}</p>
          })}
        </article>
    </main>
  )
}