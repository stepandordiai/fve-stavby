import { getTranslations } from "next-intl/server";
import "./WhySolar.scss";

const whySolarData = [
	{ img: "/icons/money.png", title: "why_us.option1", desc: "why_us.desc1" },
	{ img: "/icons/flash.png", title: "why_us.option2", desc: "why_us.desc2" },
	{ img: "/icons/shield.png", title: "why_us.option3", desc: "why_us.desc3" },
	{ img: "/icons/leaf.png", title: "why_us.option4", desc: "why_us.desc4" },
];

const WhySolar = async () => {
	const t = await getTranslations();

	return (
		<>
			<div className="why-solar__title-container">
				<h2 className="why-solar__title">{t("why_solar.title")}</h2>
				<p>{t("why_solar.sec_title")}</p>
			</div>
			<div className="why-solar">
				{whySolarData.map((card, i) => {
					return (
						<div key={i} className="why-solar__card">
							<div className="why-solar__card-icon-container">
								<img width={25} height={25} src={card.img} alt="" />
							</div>
							<div>
								<p className="why-solar__card-title">{t(card.title)}</p>
								<span>{t(card.desc)}.</span>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default WhySolar;
