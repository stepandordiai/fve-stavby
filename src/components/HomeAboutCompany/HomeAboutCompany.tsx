import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import img1 from "/img/02-c.webp";
import img2 from "/img/03-c.jpg";
import arrow from "/icons/arrow-upper-right-white.png";
import "./HomeAboutCompany.scss";

const HomeAboutCompany = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const valueDisplays = document.querySelectorAll(
			".counter-wrapper"
		) as NodeListOf<HTMLSpanElement>;
		const valueWrappers = document.querySelectorAll(
			".counter-container"
		) as NodeListOf<HTMLDivElement>;
		let interval: number = 1000;

		const activatedDisplays = new Set<number>();

		function handleDisplay() {
			valueDisplays.forEach((display, index) => {
				const displayRect = display.getBoundingClientRect();
				const valueText = valueWrappers[index].offsetWidth;
				const targetValue = Number(display.getAttribute("data-val"));

				if (
					displayRect.top < window.innerHeight &&
					!activatedDisplays.has(index)
				) {
					let startValue: number = 0;

					function startCount() {
						let duration = Math.floor(interval / targetValue);

						setTimeout(() => {
							if (startValue < targetValue) {
								startValue += 1;
								valueWrappers[index].style.width = `${valueText}px`;
								display.textContent = startValue.toString();
								startCount();
							}
						}, duration);
					}
					startCount();
					activatedDisplays.add(index);
				}
			});
		}

		handleDisplay();

		document.addEventListener("scroll", handleDisplay);

		return () => {
			document.removeEventListener("scroll", handleDisplay);
		};
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
					<p className="card__title">
						{t("photovoltaics_for_single_family_homes_title")}
					</p>
					<img className="card__img" src={img1} alt="" loading="lazy" />
					<NavLink
						to={"/photovoltaics-for-single-family-homes"}
						className="card__link"
					>
						<img
							className="card__link-icon"
							src={arrow}
							alt=""
							loading="lazy"
						/>
					</NavLink>
					<div className="card__white-element"></div>
				</div>
				<div className="card">
					<p className="card__title">
						{t("photovoltaics_for_companies_title")}
					</p>
					<img className="card__img" src={img2} alt="" loading="lazy" />
					<NavLink to={"/photovoltaics-for-companies"} className="card__link">
						<img
							className="card__link-icon"
							src={arrow}
							alt=""
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
