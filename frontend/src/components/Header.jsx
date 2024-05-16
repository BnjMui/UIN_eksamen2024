import { Link } from "react-router-dom";

export default function Header({loggedInUser}) {
    return (
        <header>
            <nav>
                <ul>
                    <li><h1>What To See?</h1></li>
                    <li><Link to={`/`}><button>What do i want to watch?</button></Link></li>
                    <li>Scroll through generes</li>
                    <li>{loggedInUser}</li>
                </ul>
            </nav>
        </header>
    )
}