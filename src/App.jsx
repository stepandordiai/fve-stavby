import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import "./App.scss";
import Home from "./pages/Home/Home";
import Building from "./components/Building/Building";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
    return (
        <Router>
            <Building />
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;
