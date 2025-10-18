import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Process from "../../components/Process/Process";
import WhyUs from "../../components/WhyUs/WhyUs";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import HomeTop from "../../components/HomeTop/HomeTop";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import WhySolar from "../../components/WhySolar/WhySolar";
import Container from "../../components/Container/Container";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta name="description" content={t("home_seo_desc")} />
				<title>{t("logo_title")} | FVE STAVBY</title>
				<link rel="canonical" href="https://www.fvestavby.cz/" />
			</Helmet>
			<main>
				<Container>
					<HomeTop />
					<div className="home">
						<HomeAboutCompany />
						<WhyUs />
						<WhySolar />
						<Process />
						<Stats />
						<Partners />
						<GetInTouch />
					</div>
				</Container>
			</main>
		</>
	);
};

export default Home;
