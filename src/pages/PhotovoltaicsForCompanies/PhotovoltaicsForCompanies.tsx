import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Advantages from "../../components/Advantages/Advantages";
import Partners from "../../components/Partners/Partners";
import img from "/img/1-c.jpg";
import "./PhotovoltaicsForCompanies.scss";

const PhotovoltaicsForCompanies = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Specializujeme se na instalaci fotovoltaických systémů pro firmy. FVE – stavby s.r.o. nabízí úsporná a efektivní řešení solární energie pro komerční objekty po celé ČR."
				/>
				<title>{t("photovoltaics_for_companies_title")} | FVE STAVBY</title>
				<link
					rel="canonical"
					href="https://fvestavby.cz/photovoltaics-for-companies"
				/>
			</Helmet>
			<main>
				<PageTitle title={t("photovoltaics_for_companies_title")} img={img} />
				<div className="photovoltaics-for-companies">
					<p style={{ marginBottom: 25 }}>
						{t("photovoltaics_for_companies_desc")}.
					</p>
					<Advantages />
					<Partners />
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default PhotovoltaicsForCompanies;
