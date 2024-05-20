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
                    <li className="whatToSee"><Link to={'/'}><h1>What To See?</h1></Link></li>
                    <li><Link to={`/`}><button id="whatToWatch" className="button">What do i want to watch?</button></Link></li>
                    <li><Link to='/genres'>Scroll through generes</Link></li>
                    <li>{loggedInUser}</li>
                    <li><Link to={`/`}><button className="button" onClick={()=>{handleLogOut()}}>Log out</button></Link></li>
                </ul>
            </nav>
        </header>
    )
}