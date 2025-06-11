import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Advantages from "../../components/Advantages/Advantages";
import img from "/img/10.jpg";
import "./CommercialInstallation.scss";

const CommercialInstallation = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Specializujeme se na instalaci fotovoltaických systémů pro firmy. FVE – stavby s.r.o. nabízí úsporná a efektivní řešení solární energie pro komerční objekty po celé ČR."
				/>
				<title>FVE STAVBY | {t("commercial_installation_title")}</title>
				<link
					rel="canonical"
					href="https://fvestavby.cz/commercial-installation"
				/>
			</Helmet>
			<main>
				<PageTitle title={t("commercial_installation_title")} img={img} />
				<div className="commercial-installation">
					<p style={{ marginBottom: 25 }}>
						{t("commercial_installation_desc")}.
					</p>
					<Advantages />
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default CommercialInstallation;
