import { client } from "../client"

export async function fetchGenres() {
    const data = await client.fetch ('*[_type == "genre"]')
    return data
}