export default function Header({loggedInUser}) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <h2>What To See?</h2>
                        <button><h4>What do i want to watch?</h4></button>
                        <p>Scroll through generes</p>
                        <p>{loggedInUser}</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}