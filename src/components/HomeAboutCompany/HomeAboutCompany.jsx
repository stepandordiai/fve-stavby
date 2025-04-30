import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import img1 from "/assets/img/15.jpg";
import img2 from "/assets/img/10.jpg";
import arrow from "/assets/icons/arrow-upper-right-white.png";
import "./HomeAboutCompany.scss";

const HomeAboutCompany = () => {
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
			<h2 className="about-company__title">O naší společnosti</h2>
			<p className="about-company__sec-title">
				V dnešní době, kdy roste důraz na udržitelnost a energetickou
				soběstačnost, se fotovoltaika stává klíčovým řešením pro domácnosti i
				firmy. Výběr správného partnera pro realizaci fotovoltaického systému je
				zásadní. Jsme tým zkušených profesionálů. Každý z nás se v energetice
				pohybuje již dlouhá léta a nabízíme komplexní služby, které zaručují
				maximální spokojenost zákazníků.
				<br />
				<br />
				Především klademe důraz na individuální přístup. Každý projekt je pro
				nás jedinečný a věnujeme mu maximální péči od prvotní konzultace, přes
				projekt, až po samotnou instalaci a následný servis. Naši odborníci Vám
				pomohou vybrat optimální řešení, které bude odpovídat Vašim potřebám,
				finančním možnostem a charakteru Vaší nemovitosti.
				<br />
				<br />
				Dbáme na kvalitu použitých materiálů a technologií. Spolupracujeme s
				předními světovými výrobci, což zajišťuje dlouhou životnost a vysokou
				efektivitu našich systémů. Kromě toho Vám pomůžeme s administrativou a
				získáním dotací, abyste měli celý proces co nejjednodušší.
				<br />
				<br />
				Naší prioritou je transparentnost, spolehlivost a budování dlouhodobých
				vztahů. S námi získáte nejen kvalitní produkt, ale také jistotu, že se o
				Vás postaráme i po dokončení instalace. Věříme, že investice do
				fotovoltaiky má smysl, a rádi Vás na této cestě podpoříme. Vyberte si
				nás a získejte spolehlivého partnera pro vaši energetickou budoucnost.
			</p>
			<div className="about-company__counter-container">
				<div>
					<div className="counter-container">
						<span className="counter-wrapper" data-val="5">
							0
						</span>
						<span>+</span>
					</div>
					<span className="counter-info">let praxe</span>
				</div>
				<div>
					<div className="counter-container">
						<span className="counter-wrapper" data-val="270">
							000
						</span>
						<span>+</span>
					</div>
					<span className="counter-info">klientů</span>
				</div>
				<div>
					<div className="counter-wrapper counter-container" data-val="14">
						00
					</div>
					<span className="counter-info">členů týmu</span>
				</div>
				<div>
					<div className="counter-container">
						<span className="counter-wrapper" data-val="5">
							0
						</span>
						<span>+ MWp</span>
					</div>
					<span className="counter-info">instalovaneho vykony</span>
				</div>
			</div>
			<NavLink to={"/about-us"} className="about-company__link">
				<span>Více o nás</span>
				<img className="about-company__link-icon" src={arrow} alt="Arrow" />
			</NavLink>
			<h2 className="we-work-with__title">Pracujeme s</h2>
			<div className="cards-container">
				<div className="card">
					<p className="card__title">Fotovoltaika pro rodinne domy</p>
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
					<p className="card__title">Firemní instalace</p>
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
