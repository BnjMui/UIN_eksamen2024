import { client} from "../client"

export async function fetchAllUsers() {
    const data = await client.fetch (`*[ _type == "user" ]{
        _id,
        username,
        favoriteMovies,
        favoriteGenres,
        wishlistedMovie }`)
    return data
}

export async function fetchLoginData() {
    const data = await client.fetch (`*[_type == "user"]{
        _id,
        username
    }`)
    return data
}

export async function getGenres() {
    const data = await client.fetch ('*[_type == "genre"]')
    return data
}