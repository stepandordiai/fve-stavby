import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Advantages from "../../components/Advantages/Advantages";
import Partners from "../../components/Partners/Partners";
import Container from "../../components/Container/Container";
import img from "/img/05-c.jpg";
import Process from "../../components/Process/Process";
import "./PhotovoltaicsForCompanies.scss";

const PhotovoltaicsForCompanies = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content={t("photovoltaics_for_companies_seo_desc")}
				/>
				<title>{t("photovoltaics_for_companies_title")} | FVE STAVBY</title>
				<link
					rel="canonical"
					href="https://www.fvestavby.cz/photovoltaics-for-companies"
				/>
			</Helmet>
			<main>
				<Container>
					<PageTitle title={t("photovoltaics_for_companies_title")} img={img} />
					<div className="photovoltaics-for-companies">
						<p style={{ marginBottom: 25, textAlign: "justify" }}>
							{t("photovoltaics_for_companies_desc")}.
						</p>
						<Advantages />
						<Process />
						<Partners />
						<GetInTouch />
					</div>
				</Container>
			</main>
		</>
	);
};

export default PhotovoltaicsForCompanies;
