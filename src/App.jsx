import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Company from "./pages/Company/Company";
import House from "./pages/House/House";
import AboutUs from "./pages/AboutUs/AboutUs";
import Components from "./pages/Components/Components";
import OurInstallation from "./pages/OurInstallation/OurInstallation";
import "./i18next";
import "./App.scss";
import Documents from "./pages/Documents/Documents";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/house" element={<House />} />
				<Route path="/company" element={<Company />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/components" element={<Components />} />
				<Route path="/our-installation" element={<OurInstallation />} />
				<Route path="/documents" element={<Documents />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
