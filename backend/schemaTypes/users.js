import {defineField, defineType} from 'sanity'

export const users = {
    name: "users",
    title: "Users",
    type: "document",
    fields: [
        {
            name: "Username",
            type: "string"
        },
        {
            name: "Favoritemovies",
            type: "string"
        },
        {
            name: "Watchlist",
            type: "string"
        },
        {
            name: "Favoriegenre",
            type: "string"
        }
    ]

}