import Header from './Header'
export default function Layout({loggedInUser}){

    return(
        <>
        <Header loggedInUser={loggedInUser}/>
        </>
    )
}