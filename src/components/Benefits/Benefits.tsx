import { getTranslations } from "next-intl/server";
import "./Benefits.scss";

const benefitsData = [
	{
		img: "/icons/liberty.png",
		title: "benefits.card_title_1",
		desc: "benefits.card_desc_1",
	},
	{
		img: "/icons/off-grid.png",
		title: "benefits.card_title_2",
		desc: "benefits.card_desc_2",
	},
	{
		img: "/icons/renewable-energy.png",
		title: "benefits.card_title_3",
		desc: "benefits.card_desc_3",
	},
];

const Benefits = async () => {
	const t = await getTranslations();

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
