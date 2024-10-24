import './navbar.css'

function Navbar() {
    return(
        <>
            <div className={"relative"}>
                <nav>
                    <h1 className={"ml-4"}>kamelprd</h1>
                    <ul id="navbar" className={"flex mr-4"}>
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
