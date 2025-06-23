import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import plusIcon from "/icons/plus-black.png";
import "./WhyUs.scss";

const WhyUs = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const advantagesBtn = document.querySelectorAll(
			".advantages-btn"
		) as NodeListOf<HTMLButtonElement>;

		advantagesBtn.forEach((btn, index) => {
			const ddWrapper = document.querySelectorAll(
				".dd-wrapper"
			) as NodeListOf<HTMLDivElement>;
			const btnIcon = document.querySelectorAll(
				".advantages-btn-icon"
			) as NodeListOf<HTMLImageElement>;
			const btnIconContainer = document.querySelectorAll(
				".advantages-btn-icon-container"
			) as NodeListOf<HTMLDivElement>;

			btn.addEventListener("click", () => {
				ddWrapper[index].classList.toggle("dd-wrapper--active");
				btnIconContainer[index].classList.toggle(
					"advantages-btn-icon-container--active"
				);
				btnIcon[index].classList.toggle("advantages-btn-icon--active");
			});

			document.addEventListener("scroll", () => {
				const firstOptionRect = btnIconContainer[0].getBoundingClientRect();

				if (firstOptionRect.top < window.innerHeight - 100) {
					ddWrapper[0].classList.add("dd-wrapper--active");
					btnIconContainer[0].classList.add(
						"advantages-btn-icon-container--active"
					);
					btnIcon[0].classList.add("advantages-btn-icon--active");
				}
			});
		});
	}, []);

	return (
		<>
			<section className="advantages">
				<div className="advantages-title-container">
					<h2>{t("why_us.title")}?</h2>
				</div>
				<ul className="advantages-list">
					<li className="advantages-item">
						<button className="advantages-btn">
							<span className="advantages-btn-title">
								{t("why_us.option1")}
							</span>
							<div className="advantages-btn-icon-container">
								<img
									className="advantages-btn-icon"
									width={20}
									height={20}
									src={plusIcon}
									alt=""
								/>
							</div>
						</button>
						<div className="dd-wrapper">
							<p className="dd-details">{t("why_us.desc1")}.</p>
						</div>
					</li>
					<li className="advantages-item">
						<button className="advantages-btn">
							<span className="advantages-btn-title">
								{t("why_us.option2")}
							</span>
							<div className="advantages-btn-icon-container">
								<img
									className="advantages-btn-icon"
									width={20}
									height={20}
									src={plusIcon}
									alt=""
								/>
							</div>
						</button>
						<div className="dd-wrapper">
							<p className="dd-details">{t("why_us.desc2")}.</p>
						</div>
					</li>
					<li className="advantages-item">
						<button className="advantages-btn">
							<span className="advantages-btn-title">
								{t("why_us.option3")}
							</span>
							<div className="advantages-btn-icon-container">
								<img
									className="advantages-btn-icon"
									width={20}
									height={20}
									src={plusIcon}
									alt=""
								/>
							</div>
						</button>
						<div className="dd-wrapper">
							<p className="dd-details">{t("why_us.desc3")}.</p>
						</div>
					</li>
					<li className="advantages-item">
						<button className="advantages-btn">
							<span className="advantages-btn-title">
								{t("why_us.option4")}
							</span>
							<div className="advantages-btn-icon-container">
								<img
									className="advantages-btn-icon"
									width={20}
									height={20}
									src={plusIcon}
									alt=""
								/>
							</div>
						</button>
						<div className="dd-wrapper">
							<p className="dd-details">{t("why_us.desc4")}.</p>
						</div>
					</li>

					<li className="advantages-item">
						<button className="advantages-btn">
							<span className="advantages-btn-title">
								{t("why_us.option5")}
							</span>
							<div className="advantages-btn-icon-container">
								<img
									className="advantages-btn-icon"
									width={20}
									height={20}
									src={plusIcon}
									alt=""
								/>
							</div>
						</button>
						<div className="dd-wrapper">
							<p className="dd-details">{t("why_us.desc5")}.</p>
						</div>
					</li>
				</ul>
			</section>
		</>
	);
};

export default WhyUs;
