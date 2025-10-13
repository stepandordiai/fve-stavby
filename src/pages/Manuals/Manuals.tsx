import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import React from "react";
import Container from "../../components/Container/Container";
import img from "/img/10-c.jpg";
import "./Manuals.scss";

const Manuals = () => {
	const { t } = useTranslation();

	interface ManualsData {
		info: string;
		link: string;
	}

	const manualsData: ManualsData[] = [
		{
			info: "Deye SUN-5/6/8/10/12K-SG04LP3-EU",
			link: "https://www.deyeinverter.com/deyeinverter/2024/08/13/instructions_sun-5-12k-sg04lp3-eu_240813_en.pdf",
		},
		{
			info: "Solax Power X3-HYBRID-5.0/6.0/8.0/10.0/12.0/15.0-D/M",
			link: "https://www.solaxpower.com/uploads/file/warranty-terms-and-conditions-au.pdf",
		},
		{
			info: "Solax Triple Power T-BAT H 11.5",
			link: "https://www.solaxpower.com/uploads/file/t-bat-sys-hv-5.8-user-manual-en.pdf",
		},
		{
			info: "Jinko Tiger Neo N-type 60HL4-(V) 485 Wp",
			link: "https://www.jinkosolar.com/uploads/TUV%20Manual%20IEC%202016(2020.12).pdf",
		},
		{
			info: "Aiko Neostar 2S 445 Wp",
			link: "https://aikosolar.com/wp-content/uploads/2024/02/AIKO-A-MAH54Mb-445-460W-35-frame-EN-V5.3.pdf",
		},

		{
			info: "TIGO - TS4-A-S",
			link: "https://img.iftech.cz/files/Ke_stazeni/130770158/TIGO_OPTIMIZER_TS4-A-O_DATA_LOGGER_WLAN_ACCESS_POINT-CZ.pdf",
		},
		{
			info: "Tigo TS4-A-O -výkonový optimizér max. 700 Wp",
			link: "https://www.originenergy.com.au/wp-content/uploads/Datasheet-TigoTS4-A-O700w-R-DS071.pdf",
		},
	];

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Stáhněte si návody a manuály k fotovoltaickým systémům. FVE – stavby s.r.o. poskytuje přehledné dokumentace k obsluze a údržbě solárních technologií."
				/>
				<title>{t("manuals_title")} | FVE STAVBY</title>
				<link rel="canonical" href="https://www.fvestavby.cz/manuals" />
			</Helmet>
			<main>
				<Container>
					<PageTitle title={t("manuals_title")} img={img} />
					<div className="manuals">
						{manualsData.map(({ info, link }, index) => {
							return (
								<React.Fragment key={index}>
									<div className="manuals-container">
										<p>{info + " (pdf)"}</p>
										<a className="manuals__link" href={link} target="_blank">
											{t("download")}
										</a>
									</div>
									<div className="manuals-divider"></div>
								</React.Fragment>
							);
						})}
						<GetInTouch />
					</div>
				</Container>
			</main>
		</>
	);
};

export default Manuals;
