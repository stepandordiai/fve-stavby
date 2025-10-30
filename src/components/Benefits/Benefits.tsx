import { useTranslation } from "react-i18next";
import icon1 from "/icons/liberty.png";
import icon2 from "/icons/off-grid.png";
import icon3 from "/icons/renewable-energy.png";
import "./Benefits.scss";

const benefitsData = [
	{ img: icon1, title: "benefits.card_title_1", desc: "benefits.card_desc_1" },
	{ img: icon2, title: "benefits.card_title_2", desc: "benefits.card_desc_2" },
	{ img: icon3, title: "benefits.card_title_3", desc: "benefits.card_desc_3" },
];

const Benefits = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 className="benefits__title">{t("benefits.title")}</h2>
			<div className="benefits">
				{benefitsData.map((benefit, index) => {
					return (
						<div key={index} className="benefits__card">
							<div className="benefits__card-icon-container">
								<img width={50} height={50} src={benefit.img} alt="" />
							</div>
							<div>
								<span className="benefits__card-title">{t(benefit.title)}</span>
								<div className="benefits__card-dd">
									<span>{t(benefit.desc)}.</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Benefits;
