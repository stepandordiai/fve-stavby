import { useTranslation } from "react-i18next";
import "./Partners.scss";

const Partners = () => {
	const { t } = useTranslation();

	interface PartnersData {
		siteUrl: string;
		imgUrl: string;
		alt: string;
	}

	const partnersData: PartnersData[] = [
		{
			siteUrl: "https://aikosolar.com/cz/",
			imgUrl:
				"https://www.memodo.cz/m/fileadmin/shopware_products/manufacturer_images/400x200px_Aiko-Logo.png",
			alt: "Aiko Logo",
		},
		{
			siteUrl: "https://www.canadiansolar.com/",
			imgUrl:
				"https://www.canadiansolar.com/wp-content/uploads/2024/06/CS-LOGO-RED-RGB-NEW-2024-W-TAG-2.png",
			alt: "Canadian Solar Logo",
		},
		{
			siteUrl: "https://deye.com/cs/",
			imgUrl: "https://www.deyeinverter.com/template/en/images/logo.png",
			alt: "Deye Logo",
		},
		{
			siteUrl: "https://www.jinkosolar.com/en/#index1",
			imgUrl:
				"https://jinkosolarcdn.shwebspace.com/themes/basicen/skin/images/logony.png",
			alt: "Jinko Solar Logo",
		},
		{
			siteUrl: "https://www.solaxpower.com/",
			imgUrl:
				"https://emberpulse.com/wp-content/uploads/2020/10/solax-power-logo.jpg",
			alt: "Solax Power Logo",
		},
		{
			siteUrl: "https://cs.tigoenergy.com/",
			imgUrl:
				"https://cdn.prod.website-files.com/5fa5ee97e1eb253b5efc0385/5fad42bc7dee3e2002385080_Tigo-logo.svg",
			alt: "Tigo Logo",
		},
		{
			siteUrl: "https://www.solaredge.com/en",
			imgUrl:
				"https://www.solaredge.com/sites/master/files/SolarEdge_logo_header_new_0.svg",
			alt: "Solar Edge Logo",
		},
		{
			siteUrl: "http://cz.zjbeny-german.com/",
			imgUrl:
				"https://lh4.googleusercontent.com/proxy/341zOYGIOFlOW5xf7XYn1CNQqGaKaOOXc9uAKv9aqbU-PX_0ameieUdtYshiwsEjcMGtbEMWv96le1WXvbtR65quSuLbJ--cyZkI7d6I8rjZOI5qriUi8jowokGgPw",
			alt: "Zjbeny Logo",
		},
		{
			siteUrl: "https://www.skoda-auto.cz/",
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/commons/0/09/%C5%A0koda_nieuw.png",
			alt: "Skoda Logo",
		},
	];

	return (
		<>
			<h2 className="partners-title">{t("partners.title")}</h2>
			<div
				className="slider"
				// reverse="true"
				// FIXME:
				style={
					{
						"--width": "100px",
						"--height": "100px",
						"--quantity": "9",
					} as React.CSSProperties
				}
			>
				<div className="list">
					{partnersData.map(({ siteUrl, imgUrl, alt }, index) => {
						return (
							<div
								key={index}
								className="item"
								// FIXME:
								style={{ "--position": index + 1 } as React.CSSProperties}
							>
								<a href={siteUrl} target="_blank">
									<img src={imgUrl} alt={alt} loading="lazy" />
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Partners;
