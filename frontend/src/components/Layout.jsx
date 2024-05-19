import { useEffect } from 'react'
import Header from './Header'
import User from './User'
export default function Layout({loggedInUser, setLoggedInUser, children}){

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if(storedUser) {
            setLoggedInUser(storedUser)
        }
    },[])
    console.log(localStorage.getItem(`user`))
    //console.log(loggedInUser)
    return(
        <>
        {loggedInUser === "" ? 
            <User setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}></User>
            : 
            <div>
                <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
                {children}
            </div>
        }
        </>
    )
}