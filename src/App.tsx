import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Home/HomePage.tsx";
import Footer from './Footer';
import Navbar from  './Navbar.tsx';

function App() {

  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>

            </Routes>
            <Footer/>
        </Router>





    </>
  )
}

export default App
