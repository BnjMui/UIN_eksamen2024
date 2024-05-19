import { client } from "../client"

export async function fetchGenres() {
    const data = await client.fetch ('*[_type == "genre"]')
    return data
}

export async function fetchMovies() {
    const data = await client.fetch (`*[_type == "movies"]{
        movieId,
        movieTitle,
        "genre": movieGenres[]->{ _id, genre }
    }`)
    return data
    
}