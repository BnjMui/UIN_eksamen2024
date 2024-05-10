import { useEffect, useState } from "react"
import { fetchLoginData } from "../../sanity/services/userServices"

export default function user () {

    const [users, setUsers] = useState([])

    const getLogInData = async () => {
        const data = await fetchLoginData()
        console.log(data)
        setUsers(data)
      }
      useEffect(()=>{
        getLogInData()
      },[])

    return (
        <>

        <h2>Hvem skal se i dag?</h2>
        <p>Velg bruker</p>
       {users?.map(data => {
         return <button key={data._id} >{data.username}</button>
       })} 
        
        </>

    )

}
