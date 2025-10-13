import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import Process from "../../components/Process/Process";
import Container from "../../components/Container/Container";
import img from "/img/04-c.jpg";
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
					href="https://www.fvestavby.cz/photovoltaics-for-single-family-homes"
				/>
			</Helmet>
			<main>
				<Container>
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
				</Container>
			</main>
		</>
	);
};

export default PhotovoltaicsForSingleFamilyHomes;
