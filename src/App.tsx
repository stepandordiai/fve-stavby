import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import PhotovoltaicsForSingleFamilyHomes from "./pages/PhotovoltaicsForSingleFamilyHomes/PhotovoltaicsForSingleFamilyHomes";
import AboutUs from "./pages/AboutUs/AboutUs";
import PhotovoltaicsForCompanies from "./pages/PhotovoltaicsForCompanies/PhotovoltaicsForCompanies";
import SVJ from "./pages/SVJ/SVJ";
import Manuals from "./pages/Manuals/Manuals";
import OurInstallation from "./pages/OurInstallation/OurInstallation";
import Components from "./pages/Components/Components";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import "./i18next";
import "./scss/App.scss";

function App() {
	return (
		<Router>
			<Header />
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route
					path="/photovoltaics-for-single-family-homes"
					element={<PhotovoltaicsForSingleFamilyHomes />}
				/>
				<Route
					path="/photovoltaics-for-companies"
					element={<PhotovoltaicsForCompanies />}
				/>
				<Route path="/svj" element={<SVJ />} />
				{/* <Route path="/components" element={<Components />} /> */}
				<Route path="/our-installation" element={<OurInstallation />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/manuals" element={<Manuals />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</Router>
	);
}

export default App;
