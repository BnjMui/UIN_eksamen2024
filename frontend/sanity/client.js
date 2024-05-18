import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "oaeilve4",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})

//skGdSzSAv1ZOfZAOrLqIRSYkdlkof6qpJlJBhFny5vOUyBJ4LxuO8VG11MGB27HcZqUIHDzpCobZLD7zQvoMIGoLYnPlVmHPfPbItfGiE5NjKOHq8J8mOop4Ys2iQqcdza2pGwJ5CKqoqFIqUGTs0SbmqxwhyZPcnjJmsYem0szFp2eqfYTK

export const writeClient = createClient({
    projectId: "oaeilve4",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skGdSzSAv1ZOfZAOrLqIRSYkdlkof6qpJlJBhFny5vOUyBJ4LxuO8VG11MGB27HcZqUIHDzpCobZLD7zQvoMIGoLYnPlVmHPfPbItfGiE5NjKOHq8J8mOop4Ys2iQqcdza2pGwJ5CKqoqFIqUGTs0SbmqxwhyZPcnjJmsYem0szFp2eqfYTK"
})