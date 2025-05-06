import { useTranslation } from "react-i18next";
import partner3 from "/assets/partnersLogos/deye.png";
import partner5 from "/assets/partnersLogos/solax.png";
import partner1 from "/assets/partnersLogos/aiko.png";
import partner2 from "/assets/partnersLogos/canadian-solar.webp";
import partner4 from "/assets/partnersLogos/jinko-solar-logo.png";
import partner6 from "/assets/partnersLogos/tigo-logo.png";
import partner7 from "/assets/partnersLogos/solar-edge-logo.png";
import partner8 from "/assets/partnersLogos/zjbeny.webp";
import partner9 from "/assets/partnersLogos/skoda.png";
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
						<img src={partner1} alt="" />
					</div>
					<div className="item" style={{ "--position": "2" }}>
						<img src={partner2} alt="" />
					</div>
					<div className="item" style={{ "--position": "3" }}>
						<img src={partner3} alt="" />
					</div>
					<div className="item" style={{ "--position": "4" }}>
						<img src={partner4} alt="" />
					</div>
					<div className="item" style={{ "--position": "5" }}>
						<img src={partner5} alt="" />
					</div>
					<div className="item" style={{ "--position": "6" }}>
						<img src={partner6} alt="" />
					</div>
					<div className="item" style={{ "--position": "7" }}>
						<img src={partner7} alt="" />
					</div>
					<div className="item" style={{ "--position": "8" }}>
						<img src={partner8} alt="" />
					</div>
					<div className="item" style={{ "--position": "9" }}>
						<img src={partner9} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Partners;
