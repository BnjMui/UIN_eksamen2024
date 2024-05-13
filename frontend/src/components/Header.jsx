export default function Header({loggedInUser}) {
    return (
        <header>
            <nav>
                <ul>
                    <li><h1>What To See?</h1></li>
                    <li><button><h2>What do i want to watch?</h2></button></li>
                    <li><h3>Scroll through generes</h3></li>
                    <li><h3>{loggedInUser}</h3></li>
                </ul>
            </nav>
        </header>
    )
}