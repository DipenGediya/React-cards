import { Route, Routes } from "react-router-dom";
import Navabr from "./component/Navbar";
import Home from "./component/pages/Home";
import Product from "./component/pages/Product";
import Details from "./component/pages/Details";
import Footer from "./component/Footer";

function App() {
    return (
        <>
            <Navabr />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Product" element={<Product/>} />
                <Route path="/:id" element={<Details/>} />
            </Routes>

            <Footer/>
        </>
    )
}

export default App