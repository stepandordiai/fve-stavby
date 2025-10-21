import { useTranslation } from "react-i18next";
import icon1 from "/icons/liberty.png";
import icon2 from "/icons/off-grid.png";
import icon3 from "/icons/renewable-energy.png";
import "./Benefits.scss";

const Benefits = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 className="benefits__title">{t("benefits.title")}</h2>
			<div className="benefits">
				<div className="benefits__card">
					<div className="benefits__card-icon-container">
						<img width={50} height={50} src={icon1} alt="" />
					</div>
					<div>
						<span className="benefits__card-title">
							{t("benefits.card_title_1")}
						</span>
						<div className="benefits__card-dd">
							<span>{t("benefits.card_desc_1")}.</span>
						</div>
					</div>
				</div>
				<div className="benefits__card">
					<div className="benefits__card-icon-container">
						<img width={50} height={50} src={icon2} alt="" />
					</div>
					<div>
						<span className="benefits__card-title">
							{t("benefits.card_title_2")}
						</span>
						<div className="benefits__card-dd">
							<span>{t("benefits.card_desc_2")}.</span>
						</div>
					</div>
				</div>
				<div className="benefits__card">
					<div className="benefits__card-icon-container">
						<img width={50} height={50} src={icon3} alt="" />
					</div>
					<div>
						<span className="benefits__card-title">
							{t("benefits.card_title_3")}
						</span>
						<div className="benefits__card-dd">
							<span>{t("benefits.card_desc_3")}.</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Benefits;
