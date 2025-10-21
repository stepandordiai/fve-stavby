import { useTranslation } from "react-i18next";
import { useState } from "react";
import plusIcon from "/icons/plus-black.png";
import "./WhyUs.scss";

const WhyUs = () => {
	const { t } = useTranslation();

	const advantagesData = [
		{
			title: t("why_us.option1"),
			desc: t("why_us.desc1"),
		},
		{
			title: t("why_us.option2"),
			desc: t("why_us.desc2"),
		},
		{
			title: t("why_us.option3"),
			desc: t("why_us.desc3"),
		},
		{
			title: t("why_us.option4"),
			desc: t("why_us.desc4"),
		},
		{
			title: t("why_us.option5"),
			desc: t("why_us.desc5"),
		},
	];

	const [advantageActive, setAdvantageActive] = useState(
		new Array(advantagesData.length).fill(false)
	);

	const handleAdvantageOnClick = (index: number) => {
		setAdvantageActive((prev) => {
			const updated = [...prev];
			updated[index] = !updated[index];
			return updated;
		});
	};

	return (
		<div className="advantages">
			<div className="advantages-title-container">
				<h2>{t("why_us.title")}?</h2>
			</div>
			<ul className="advantages-list">
				{advantagesData.map((advantage, index) => {
					return (
						<li className="advantages-item">
							<button
								onClick={() => handleAdvantageOnClick(index)}
								className="advantages-btn"
							>
								<span className="advantages-btn-title">{advantage.title}</span>
								<div
									className={`advantages-btn-icon-container ${
										advantageActive[index]
											? "advantages-btn-icon-container--active"
											: ""
									}`}
								>
									<img
										className={`advantages-btn-icon ${
											advantageActive[index]
												? "advantages-btn-icon--active"
												: ""
										}`}
										width={20}
										height={20}
										src={plusIcon}
										alt=""
									/>
								</div>
							</button>
							<div
								className={`dd-wrapper ${
									advantageActive[index] ? "dd-wrapper--active" : ""
								}`}
							>
								<p className="dd-details">{advantage.desc}.</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default WhyUs;
