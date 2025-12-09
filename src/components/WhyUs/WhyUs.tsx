import { useTranslation } from "react-i18next";
import { useState } from "react";
import classNames from "classnames";
import "./WhyUs.scss";

const advantagesData = [
	{
		title: "why_us.option1",
		desc: "why_us.desc1",
	},
	{
		title: "why_us.option2",
		desc: "why_us.desc2",
	},
	{
		title: "why_us.option3",
		desc: "why_us.desc3",
	},
	{
		title: "why_us.option4",
		desc: "why_us.desc4",
	},
	{
		title: "why_us.option5",
		desc: "why_us.desc5",
	},
];

const WhyUs = () => {
	const { t } = useTranslation();

	// TODO: learn this
	const [advantageActive, setAdvantageActive] = useState(() => [
		true,
		...new Array(advantagesData.length - 1).fill(false),
	]);

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
						<li key={index} className="advantages-item">
							<h3>
								<button
									onClick={() => handleAdvantageOnClick(index)}
									className="advantages-btn"
									aria-expanded={advantageActive[index]}
									aria-controls={`advantages-item-${index}`}
								>
									<span className="advantages-btn-title">
										{t(advantage.title)}
									</span>
									<span
										className={classNames("advantages-btn-icon-container", {
											"advantages-btn-icon-container--active":
												advantageActive[index],
										})}
									>
										<svg
											width="24px"
											height="24px"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4 12H20M12 4V20"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</button>
							</h3>
							<div
								className={classNames("dd-wrapper", {
									"dd-wrapper--active": advantageActive[index],
								})}
								id={`advantages-item-${index}`}
								hidden={!advantageActive[index]}
							>
								<p className="dd-details">{t(advantage.desc)}.</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default WhyUs;
