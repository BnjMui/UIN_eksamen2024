import { useEffect, useState } from "react"
import { fetchLoginData } from "../../sanity/services/userServices"

export default function LogIn ({setLoggedInUser}) {
    const [users, setUsers] = useState([])

    const getLogInData = async () => {
        try {const data = await fetchLoginData()
        setUsers(data)
        } catch(error){
          console.log(error)
        }
      }
      useEffect(()=>{
        getLogInData()
      },[])
      
      const handleLogIn= (e) => {
        localStorage.setItem("user", JSON.stringify(e))
        setLoggedInUser(JSON.parse(localStorage.getItem("user")))
      }
    return (
        <>
        <h2>Hvem skal se i dag?</h2>
        <p>Velg bruker</p>
       {users?.map(data => {
         return <button key={data._id} onClick={()=> handleLogIn(data.username)}>{data.username}</button>
       })} 
        </>

    )

}