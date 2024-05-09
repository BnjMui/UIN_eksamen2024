import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "oaeilve4",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})