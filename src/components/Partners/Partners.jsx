import { useTranslation } from "react-i18next";
import partner3 from "/partnersLogos/deye.png";
import partner5 from "/partnersLogos/solax.png";
import partner1 from "/partnersLogos/aiko.png";
import partner2 from "/partnersLogos/canadian-solar.webp";
import partner4 from "/partnersLogos/jinko-solar-logo.png";
import partner6 from "/partnersLogos/tigo-logo.png";
import partner7 from "/partnersLogos/solar-edge-logo.png";
import partner8 from "/partnersLogos/zjbeny.webp";
import partner9 from "/partnersLogos/skoda.png";
import "./Partners.scss";

const Partners = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 className="partners-title">{t("partners.title")}</h2>
			<div
				className="slider"
				// reverse="true"
				style={{
					"--width": "100px",
					"--height": "100px",
					"--quantity": "9",
				}}
			>
				<div className="list">
					<div className="item" style={{ "--position": "1" }}>
						<img src={partner1} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "2" }}>
						<img src={partner2} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "3" }}>
						<img src={partner3} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "4" }}>
						<img src={partner4} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "5" }}>
						<img src={partner5} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "6" }}>
						<img src={partner6} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "7" }}>
						<img src={partner7} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "8" }}>
						<img src={partner8} alt="" loading="lazy" />
					</div>
					<div className="item" style={{ "--position": "9" }}>
						<img src={partner9} alt="" loading="lazy" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Partners;
