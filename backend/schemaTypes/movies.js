export const movies = ({
    name: "movies",
    title: "Movies",
    type: "document",
    fields: [
        {
            name: "movieTitle",
            type: "string"
        },
        {
            name: "movieId",
            type: "string"
        },
        {
            name: "movieGenres",
            type: "array",
            of: [
                {
                    name: "genre",
                    type: "reference",
                    to: [{type: "genre"}]
                }
            ]
        }
    ]
})