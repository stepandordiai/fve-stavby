import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
// import Building from "./components/Building/Building";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
    return (
        <Router>
            {/* <Building /> */}
            <ScrollToTop />
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
