import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Process from "../../components/Process/Process";
import WhyUs from "../../components/WhyUs/WhyUs";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("logo_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/" />
			</Helmet>
			<main>
				<HomeTitle />
				<div className="home">
					<HomeAboutCompany />
					<WhyUs />
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
