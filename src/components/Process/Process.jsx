import { useEffect } from "react";
import plusIcon from "/assets/icons/plus-black.png";
import "./Process.scss";

const Process = () => {
	useEffect(() => {
		const processCard = document.querySelectorAll(".process-card");
		const processIcon = document.querySelectorAll(".process__icon");
		const detailsWrapper = document.querySelectorAll(".details-wrapper");

		for (let i = 0; i < processCard.length; i++) {
			processCard[i].addEventListener("click", () => {
				for (let i = 0; i < processCard.length; i++) {
					processCard[i].classList.remove("process-card--active");
					detailsWrapper[i].classList.remove("details-wrapper--active");
					processIcon[i].classList.remove("process__icon--active");
				}
				processCard[i].classList.add("process-card--active");
				detailsWrapper[i].classList.add("details-wrapper--active");
				processIcon[i].classList.add("process__icon--active");
			});
		}

		document.querySelectorAll(".process-card").forEach((card, index) => {
			document.addEventListener("scroll", () => {
				const cardRect = card.getBoundingClientRect();
				const steps = document.querySelectorAll(".step");
				if (cardRect.bottom < window.innerHeight) {
					if (card.contains(steps[index])) {
						steps[index].classList.add("step--active");
					}
				}
			});
		});
	}, []);

	return (
		<>
			<h2 className="process__title">Náš proces</h2>
			<div className="process-grid">
				<div className="process-card process-card--active">
					<div className="process-card__step">
						<span className="step" data-step-value="1"></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p className="process-card__title">
						Osobní konzultace a zajištění podkladů
					</p>
					<p className="process-card__details">
						Náš technický konzultant přímo na místě zhodnotí možnosti realizace.
						Zjistí základní informace o Vašich plánech, představách a možnostech
						a navrhne ideální řešení.
					</p>
				</div>
				<div className="process-card">
					<div className="process-card__step">
						<span></span>
						<span className="step" data-step-value="2"></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p className="process-card__title">Příprava nabídky</p>
					<p className="process-card__details">
						Na základě všech podkladů zpracujeme cenovou nabídku.
					</p>
				</div>
				<div className="process-card">
					<div className="process-card__step">
						<span></span>
						<span></span>
						<span className="step" data-step-value="3"></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p className="process-card__title">Technický audit</p>
					<p className="process-card__details">
						V případě dohody Vás navštíví náš technický specialista, a
						dopodrobna s Vámi projedná nejlepší možný technologický postup
						instalace Vaší fotovoltaické elektrárny.
					</p>
				</div>
				<div className="process-card">
					<div className="process-card__step">
						<span></span>
						<span></span>
						<span></span>
						<span className="step" data-step-value="4"></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p className="process-card__title">Podpis smlouvy</p>
					<p className="process-card__details">
						Dalším krokem v postupu je podepsání smlouvy o dílo.
					</p>
					<div className="process-card__price">Zdarma pro naše klienty</div>
				</div>

				<div className="process-card">
					<div className="process-card__step">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span className="step" data-step-value="5"></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p className="process-card__title">Vyřízení administrativy</p>
					<p className="process-card__details">
						Zajistíme veškerá povolení, která pro realizaci projektu potřebujeme
						a vyřídíme Vám dotaci.
					</p>
				</div>
				<div className="process-card">
					<div className="process-card__step">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span className="step" data-step-value="6"></span>
						<span></span>
						<span></span>
					</div>
					<p className="process-card__title">Realizace projektu</p>
					<p className="process-card__details">
						Nainstalujeme Vaši fotovoltaickou elektrárnu a provedeme revizi.
					</p>
				</div>
				<div className="process-card">
					<div className="process-card__step">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span className="step" data-step-value="7"></span>
						<span></span>
					</div>
					<p className="process-card__title">Servis a monitoring</p>
					<p className="process-card__details">
						Nadále hlídáme funkčnost instalace a v případě potřeby zajistíme
						servis co nejrychleji.
					</p>
				</div>
				<div className="process-card">
					<div className="process-card__step">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span className="step" data-step-value="8"></span>
					</div>
					<p className="process-card__title">Spokojený zákazník</p>
					<p className="process-card__details">
						Spokojený zákazník, který používá svou fotovoltaickou elektrárnu a
						své zkušenosti s montáží a firmou dále doporučuje svým kamarádům a
						známým.
					</p>
				</div>
			</div>
		</>
	);
};

export default Process;
