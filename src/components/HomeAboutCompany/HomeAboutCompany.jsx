import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import img1 from "/img/15.jpg";
import img2 from "/img/10.jpg";
import arrow from "/icons/arrow-upper-right-white.png";
import "./HomeAboutCompany.scss";

const HomeAboutCompany = () => {
	const { t } = useTranslation();

	useEffect(() => {
		let valueDisplays = document.querySelectorAll(".counter-wrapper");
		const valueWrappers = document.querySelectorAll(".counter-container");
		let interval = 1000;

		valueDisplays.forEach((valueDisplay, index) => {
			let isUsed = false;
			addEventListener("scroll", () => {
				const valueDisplayRect = valueDisplay.getBoundingClientRect().top;
				const valueText = valueWrappers[index].offsetWidth;
				if (valueDisplayRect < window.innerHeight) {
					if (!isUsed) {
						let startValue = 0;
						let endValue = parseInt(valueDisplay.getAttribute("data-val"));

						let duration = Math.floor(interval / endValue);

						function start() {
							let counter = setTimeout(() => {
								startValue += 1;
								valueWrappers[index].style.width = `${valueText}px`;
								valueDisplay.textContent = startValue;

								// I tried to increase duration every loop so counter end up smoothly

								// duration += 0.25;
								if (startValue == endValue) {
									clearTimeout(counter);
								} else {
									start();
								}
							}, duration);
						}

						start();
					}
					isUsed = true;
				}
			});
		});
	}, []);

	return (
		<div className="home-about-company">
			<h2 className="about-company__title">{t("home.about_company_title")}</h2>
			<p className="about-company__sec-title">
				{t("about_us_p1")}.
				<br />
				<br />
				{t("about_us_p2")}.
				<br />
				<br />
				{t("about_us_p3")}.
				<br />
				<br />
				{t("about_us_p4")}.
			</p>
			<div className="about-company__counter-container">
				<div>
					<div className="counter-container">
						<span className="counter-wrapper" data-val="5">
							0
						</span>
						<span>+</span>
					</div>
					<span className="counter-info">{t("home.years")}</span>
				</div>
				<div>
					<div className="counter-container">
						<span className="counter-wrapper" data-val="270">
							000
						</span>
						<span>+</span>
					</div>
					<span className="counter-info">{t("home.clients")}</span>
				</div>
				<div>
					<div className="counter-wrapper counter-container" data-val="14">
						00
					</div>
					<span className="counter-info">{t("home.members")}</span>
				</div>
				<div>
					<div className="counter-container">
						<span className="counter-wrapper" data-val="5">
							0
						</span>
						<span>+ MWp</span>
					</div>
					<span className="counter-info">{t("home.installated")}</span>
				</div>
			</div>
			<NavLink to={"/about-us"} className="about-company__link">
				<span>{t("home.about_us_link")}</span>
				<img className="about-company__link-icon" src={arrow} alt="Arrow" />
			</NavLink>
			<h2 className="we-work-with__title">{t("home.we_work_with_title")}</h2>
			<div className="cards-container">
				<div className="card">
					<p className="card__title">{t("house_title")}</p>
					<img className="card__img" src={img1} alt="" loading="lazy" />
					<NavLink to={"/house"} className="card__link">
						<img
							className="card__link-icon"
							src={arrow}
							alt="Arrow"
							loading="lazy"
						/>
					</NavLink>
					<div className="card__white-element"></div>
				</div>
				<div className="card">
					<p className="card__title">{t("company_title")}</p>
					<img className="card__img" src={img2} alt="" loading="lazy" />
					<NavLink to={"/company"} className="card__link">
						<img
							className="card__link-icon"
							src={arrow}
							alt="Arrow"
							loading="lazy"
						/>
					</NavLink>
					<div className="card__white-element"></div>
				</div>
			</div>
		</div>
	);
};

export default HomeAboutCompany;
