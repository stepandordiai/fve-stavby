import { useTranslation } from "react-i18next";
import leafIcon from "/icons/leaf.png";
import moneyIcon from "/icons/money.png";
import flashIcon from "/icons/flash.png";
import shieldIcon from "/icons/shield.png";
import "./WhySolar.scss";

const WhySolar = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 className="why-solar__title">{t("why_solar.title")}</h2>
			<p>{t("why_solar.sec_title")}</p>
			<div className="why-solar">
				<div className="why-solar__card">
					<div className="why-solar__card-icon-container">
						<img width={25} src={moneyIcon} alt="" />
					</div>
					<div>
						<span className="why-solar__card-title">{t("why_us.option1")}</span>
						<div className="why-solar__card-dd">
							<span>{t("why_us.desc1")}.</span>
						</div>
					</div>
				</div>
				<div className="why-solar__card">
					<div className="why-solar__card-icon-container">
						<img width={25} src={flashIcon} alt="" />
					</div>
					<div>
						<span className="why-solar__card-title">{t("why_us.option2")}</span>
						<div className="why-solar__card-dd">
							<span>{t("why_us.desc2")}.</span>
						</div>
					</div>
				</div>
				<div className="why-solar__card">
					<div className="why-solar__card-icon-container">
						<img width={25} src={shieldIcon} alt="" />
					</div>
					<div>
						<span className="why-solar__card-title">{t("why_us.option3")}</span>
						<div className="why-solar__card-dd">
							<span>{t("why_us.desc3")}.</span>
						</div>
					</div>
				</div>
				<div className="why-solar__card">
					<div className="why-solar__card-icon-container">
						<img width={25} src={leafIcon} alt="" />
					</div>
					<div>
						<span className="why-solar__card-title">{t("why_us.option4")}</span>
						<div className="why-solar__card-dd">
							<span>{t("why_us.desc4")}.</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhySolar;
