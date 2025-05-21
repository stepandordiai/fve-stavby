import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import WhySolar from "../../components/WhySolar/WhySolar";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/img/15.webp";
import "./House.scss";

const House = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("house_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/house" />
			</Helmet>
			<PageTitle title={t("house_title")} img={img} />
			<div className="house">
				<WhySolar />
				<GetInTouch />
			</div>
		</>
	);
};

export default House;
