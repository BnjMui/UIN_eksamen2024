import { client} from "../client"

export async function fetchAllUsers() {
    const data = await client.fetch (`*[ _type == "genre" ]{ _id, genre }`)
    return data
}