import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

export default function Header({loggedInUser, setLoggedInUser}) {

    const handleLogOut = function(){
        setLoggedInUser("")
        localStorage.clear()
    }


    return (
        <header className="headerContent">
            <nav>
                <ul>
                    <li><h1>What To See?</h1></li>
                    <li><Link to={`/`}><button>What do i want to watch?</button></Link></li>
                    <li>Scroll through generes</li>
                    <li><RxAvatar />  {loggedInUser}</li>
                    <li><Link to={`/`}><button onClick={()=>{handleLogOut()}}>Log out</button></Link></li>
                </ul>
            </nav>
        </header>
    )
}