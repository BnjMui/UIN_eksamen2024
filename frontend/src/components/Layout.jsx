import Header from './Header'
import LogIn from './LogIn'
export default function Layout({loggedInUser, setLoggedInUser, children}){

    return(
        <>
        {loggedInUser == "" ? 
            <LogIn setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}></LogIn>
            : 
            <div>
                <Header loggedInUser={loggedInUser}/>
                {children}
            </div>
        }
        </>
    )
}