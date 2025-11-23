import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Process from "../../components/Process/Process";
import WhyUs from "../../components/WhyUs/WhyUs";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import { NavLink } from "react-router-dom";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import WhySolar from "../../components/WhySolar/WhySolar";
import Container from "../../components/Container/Container";
import img from "/img/01-c.jpg";
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
					<section className="home-hero">
						<div className="home-top">
							<img className="home-top__img" src={img} alt="" />
							<p className="loading__title">FVE STAVBY</p>
							<div className="home-top__details-container">
								<div className="home-top__details">
									<h1 className="home-top__title">FVE - stavby s.r.o.</h1>
									<h2 className="home-top__sec-title">{t("logo_title")}</h2>
									<h2 className="home-top__info">{t("home.title")}</h2>
								</div>
								<div className="home-top__link-container">
									<NavLink className="home-top__link" to="/manuals">
										<span>{t("manuals_title")}</span>
										<svg
											width="32px"
											height="32px"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 17L17 7M17 7H8M17 7V16"
												stroke="currentColor"
												stroke-width="1"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</NavLink>
									<NavLink className="home-top__link" to="/contacts">
										<span>{t("home.contacts_link")}</span>
										<svg
											width="32px"
											height="32px"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 17L17 7M17 7H8M17 7V16"
												stroke="currentColor"
												stroke-width="1"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</NavLink>
								</div>
							</div>
						</div>
					</section>
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
