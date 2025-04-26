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
			<section className="company">
				<Advantages />
				<GetInTouch />
			</section>
		</>
	);
};

export default Company;
