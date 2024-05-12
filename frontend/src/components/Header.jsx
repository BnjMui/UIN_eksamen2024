export default function Header({loggedInUser}) {
    return (
        <header>
            <nav>
                <ul>
                    <li><h2>What To See?</h2></li>
                    <li><button><h4>What do i want to watch?</h4></button></li>
                    <li><p>Scroll through generes</p></li>
                    <li><p>{loggedInUser}</p></li>
                </ul>
            </nav>
        </header>
    )
}