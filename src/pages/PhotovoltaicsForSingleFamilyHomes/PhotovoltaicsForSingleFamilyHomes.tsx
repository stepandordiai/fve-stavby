import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import Process from "../../components/Process/Process";
import img from "/img/3-c.jpg";
import "./PhotovoltaicsForSingleFamilyHomes.scss";

const PhotovoltaicsForSingleFamilyHomes = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Instalujeme fotovoltaické elektrárny pro rodinné domy na klíč. Snižte své náklady na energie s FVE – stavby s.r.o. a využijte dotace z programu Nová zelená úsporám."
				/>
				<title>
					{t("photovoltaics_for_single_family_homes_title")} | FVE STAVBY
				</title>
				<link
					rel="canonical"
					href="https://fvestavby.cz/photovoltaics-for-single-family-homes"
				/>
			</Helmet>
			<main>
				<PageTitle
					title={t("photovoltaics_for_single_family_homes_title")}
					img={img}
				/>
				<div className="photovoltaics-for-single-family-homes">
					<Benefits />
					<Process />
					<Partners />
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default PhotovoltaicsForSingleFamilyHomes;
