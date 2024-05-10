export const users = ({
    name: "user",
    title: "user",
    type: "document",
    fields: [
        {
            name: "username",
            title: "Username",
            type: "string"
        },
        {
            name: "favoriteMovies",
            title: "Favorite Movies",
            type: "array",
            of: [{type: "favoriteMovies"}]
        },
        {
            name: "favoriteGenres",
            title: "Favorite Genres",
            type: "array",
            of: [{type: "favoriteGenres"}]
        },
        {
            name: "wishlistedMovie",
            title: "Wishlist",
            type: "array",
            of: [{type: "wishlist"}]
        }
    ]
})