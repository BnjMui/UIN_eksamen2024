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
        <article className="loginContent">
          <h2>Who is watching?</h2>
          <p>Select user</p>
          {users?.map(data => {
          return <button className="button" key={data._id} onClick={()=> handleLogIn(data.username)}>{data.username}</button>
          })} 
        </article>
        </>

    )

}