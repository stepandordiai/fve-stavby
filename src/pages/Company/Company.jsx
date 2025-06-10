import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Advantages from "../../components/Advantages/Advantages";
import img from "/img/10.jpg";
import "./Company.scss";

const Company = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Specializujeme se na instalaci fotovoltaických systémů pro firmy. FVE – stavby s.r.o. nabízí úsporná a efektivní řešení solární energie pro komerční objekty po celé ČR."
				/>
				<title>FVE STAVBY | {t("company_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/company" />
			</Helmet>
			<main>
				<PageTitle title={t("company_title")} img={img} />
				<div className="company">
					<p style={{ marginBottom: 25 }}>{t("company_desc")}.</p>
					<Advantages />
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default Company;
