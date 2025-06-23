import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import FamilyHouses from "./pages/FamilyHouses/FamilyHouses";
import AboutUs from "./pages/AboutUs/AboutUs";
import CommercialInstallation from "./pages/CommercialInstallation/CommercialInstallation";
import Manuals from "./pages/Manuals/Manuals";
import OurInstallation from "./pages/OurInstallation/OurInstallation";
import Components from "./pages/Components/Components";
import Contacts from "./pages/Contacts/Contacts";
import "./i18next";
import "./scss/App.scss";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/family-houses" element={<FamilyHouses />} />
				<Route
					path="/commercial-installation"
					element={<CommercialInstallation />}
				/>
				<Route path="/components" element={<Components />} />
				<Route path="/our-installation" element={<OurInstallation />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/manuals" element={<Manuals />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
