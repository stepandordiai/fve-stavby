import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Advantages from "../../components/Advantages/Advantages";
import img from "/assets/img/10.jpg";
import "./Company.scss";

const Company = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("company_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/company" />
			</Helmet>
			<PageTitle title={"Firemní instalace"} img={img} />
			<div className="company">
				<p style={{ marginBottom: 25 }}>
					Nabízíme firmám individuální poradenství šité na míru jejich potřebám,
					díky čemuž umíme maximalizovat výhody fotovoltaických elektráren.
					Postavíme Vám fotovoltaickou elektrárnu na jakémkoliv typu střech a
					jsem taktéž specialisté v pozemních instalacích. Zanechte nám své
					kontaktní údaje a my se Vám rádi ozveme.
				</p>
				<Advantages />
				<GetInTouch />
			</div>
		</>
	);
};

export default Company;
