export default function Homepage({loggedInUser, user}) {
  return (
    <main>
        <h2>Hello, {loggedInUser}</h2>
        <article>
            <h4>Movies i would like to watch</h4>
        </article>
        <article>
            <p>You have these movies in your watchlist:</p>
        </article>
        <article>
            <h3>Im going to watch with...</h3>
            {user?.map((data, i) => {
            if (data.username !== loggedInUser)
            return <p key={i} >{data.username}</p>
          })}
        </article>
        <article>
            {user?.map((data, i) => {
            if (data.username === loggedInUser)
            return <article key={i}>
            {data.favoriteMovies.map((m, i) => {
                return <h1 key={i}>{m.movieTitle}</h1>
            })}
          </article>
          })}
        </article>
    </main>
  )
}