import { client } from "../client"

export async function fetchGenres() {
    const data = await client.fetch ('*[_type == "genre"]')
    return data
}

export async function fetchMovies() {
    const data = await client.fetch (`*[_type == "movies"]{
        movieId,
        movieTitle,
        "imgUrl": mainImage.asset->url,
        movieGenres
    }`)
    return data
    
}