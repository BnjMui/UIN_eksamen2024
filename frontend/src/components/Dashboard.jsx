export default function Dashboard({loggedInUser, user}){
    //console.log(loggedInUser)
 
    return (
        <>
        <h1>Recomendations for user1 and user2</h1>

        <section>
            <article>
                <h3>Catch up!</h3>
                <p>You have x movies in common on your wishlists.</p>
                {user?.map((e, i) => {
                            return <article key={i}>
                            {e.favoriteMovies.map((m, i) => {
                                return <p key={i}>{m.movieTitle}</p>
                            })}
                        </article> 
                })}
            </article>
            <article>
                <h3>Go safe!</h3>
                <p>You have x favourite movies in common</p>
                <article>
                    <img src="placehold.co/300x300"/>
                    <h3>movie1</h3>
                </article>
            </article>
            <article>
                <h3>Explore!</h3>
                <p>You have these genres in common. Chech out what movies to choose from</p>
                <ul>
                    <li>genre1</li>
                    <li>genre2</li>
                </ul>
            </article>
        </section>

        </>
    )
}