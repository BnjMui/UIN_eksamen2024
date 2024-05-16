export const movieGenres = ({
    name: "movieGenres",
    type: "object",
    fields: [
        {
            name: "genres",
            type: "reference",
            to: [{type: "genre"}]
        }
    ]
})