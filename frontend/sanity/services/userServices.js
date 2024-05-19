import { client, writeClient} from "../client"

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

export async function updateFavoriteGenres(userId, genre) {
    const result = await writeClient.patch(userId)
    .setIfMissing({favoriteGenres: []})
    .append("favoriteGenres", [{genre: genre}])
    .commit
    ({autoGenerateArrayKeys: true})
    .then(() => {return "Success"})
    .catch((error) => {return "Error: " + error.message})

    return result
}

