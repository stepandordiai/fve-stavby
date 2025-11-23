import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import React from "react";
import Container from "../../components/Container/Container";
import img from "/img/10-c.jpg";
import "./Manuals.scss";

interface Manual {
	info: string;
	link: string;
}

const manualsData: Manual[] = [
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

const Manuals = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta name="description" content={t("manuals_seo_desc")} />
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
										<span style={{ wordBreak: "break-all" }}>{info}</span>
										<a className="manuals__link" href={link} target="_blank">
											<span>{t("download")}</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-filetype-pdf"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
												/>
											</svg>
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
