import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import WhySolar from "../../components/WhySolar/WhySolar";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/img/3-c.jpg";
import "./FamilyHouses.scss";

const FamilyHouses = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Instalujeme fotovoltaické elektrárny pro rodinné domy na klíč. Snižte své náklady na energie s FVE – stavby s.r.o. a využijte dotace z programu Nová zelená úsporám."
				/>
				<title>FVE STAVBY | {t("family_houses_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/family-houses" />
			</Helmet>
			<main>
				<PageTitle title={t("family_houses_title")} img={img} />
				<div className="family-houses">
					<WhySolar />
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default FamilyHouses;
