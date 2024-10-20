import './navbar.css'

function Navbar() {
    return(
        <>
            <div>
                <nav>
                    <h1>kamelprd</h1>
                    <ul id="navbar">
                        <li><a className="active">HOME</a></li>
                        <li><a>BEATS</a></li>
                        <li><a>ABOUT ME</a></li>
                        <li><a>CART</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
