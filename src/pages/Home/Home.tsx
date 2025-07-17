import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Process from "../../components/Process/Process";
import WhyUs from "../../components/WhyUs/WhyUs";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import WhySolar from "../../components/WhySolar/WhySolar";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Specializujeme se na instalaci fotovoltaických elektráren na klíč. FVE – stavby s.r.o. nabízí efektivní solární řešení pro rodinné domy i firmy po celé ČR."
				/>
				<title>{t("logo_title")} | FVE STAVBY</title>
				<link rel="canonical" href="https://fvestavby.cz/" />
			</Helmet>
			<main>
				<HomeTitle />
				<div className="home">
					<HomeAboutCompany />
					<WhyUs />
					<WhySolar />
					<Process />
					<Stats />
					<Partners />
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default Home;
