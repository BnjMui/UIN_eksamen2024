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
            name: "favorites",
            title: "Favorites",
            type: "array",
            of: [{type: "favorites"}]
        }
    ]
})