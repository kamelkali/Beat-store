// @ts-ignore
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="sticky top-0 z-50 w-full bg-black py-5 font-inter"> {/* Made the navbar sticky */}
                <nav className="flex items-center justify-between px-12">
                    <h1 className="text-white font-bold text-lg">kamelprd</h1>
                    <ul id="navbar" className="flex gap-8">
                        <li className="list-none">
                            <a className="text-white font-semibold hover:text-red-600 transition-colors duration-300 relative after:absolute after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                                <Link to={"/"}>HOME</Link>
                            </a>
                        </li>
                        <li className="list-none">
                            <a className="text-white font-semibold hover:text-red-600 transition-colors duration-300 relative after:absolute after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                                BEATS
                            </a>
                        </li>
                        <li className="list-none">
                            <a className="text-white font-semibold hover:text-red-600 transition-colors duration-300 relative after:absolute after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                                ABOUT ME
                            </a>
                        </li>
                        <li className="list-none">
                            <a className="text-white font-semibold hover:text-red-600 transition-colors duration-300 relative after:absolute after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                                CART
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
