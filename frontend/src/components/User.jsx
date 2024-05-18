import { useEffect, useState } from "react"
import { fetchLoginData } from "../../sanity/services/userServices"
import Homepage from "./Homepage"

export default function user ({setLoggedInUser}) {
    const [currentUser, setCurrentUser] = useState("")
    const [users, setUsers] = useState([])

    const getLogInData = async () => {
        const data = await fetchLoginData()
        setUsers(data)
      }
      useEffect(()=>{
        getLogInData()
      },[])
      
      useEffect(() => {
        localStorage.clear //Må fjernes og byttes ut med "logg ut" knapp...
        localStorage.setItem(users, JSON.stringify(currentUser))
        setLoggedInUser(JSON.parse(localStorage.getItem(users)))
      },[currentUser] )
      //console.log(loggedInUser) //Må også fjernes når prosjektet er ferdig.

    return (
        <>

        <h2>Hvem skal se i dag?</h2>
        <p>Velg bruker</p>
       {users?.map(data => {
         return <button key={data._id} onClick={()=> setCurrentUser(data.username)}>{data.username}</button>
       })} 
        
        </>

    )

}