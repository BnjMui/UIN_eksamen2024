import { useEffect } from 'react'
import Header from './Header'
import LogIn from './LogIn'
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
            <LogIn setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}></LogIn>
            : 
            <div>
                <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
                {children}
            </div>
        }
        </>
    )
}