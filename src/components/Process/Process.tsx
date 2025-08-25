import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Process.scss";

const Process = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const processCard = document.querySelectorAll(
			".process-card"
		) as NodeListOf<HTMLDivElement>;
		const steps = document.querySelectorAll(
			".step"
		) as NodeListOf<HTMLSpanElement>;

		const handleProcessCard = () => {
			processCard.forEach((card, index) => {
				const cardRect = card.getBoundingClientRect();
				if (cardRect.bottom < window.innerHeight) {
					steps[index].classList.add("step--active");
				} else {
					steps[index].classList.remove("step--active");
				}
			});
		};

		handleProcessCard();

		window.addEventListener("scroll", handleProcessCard);

		return () => {
			window.removeEventListener("scroll", handleProcessCard);
		};
	}, []);

	return (
		<>
			<h2 className="process__title">{t("process.title")}</h2>
			<div className="process-grid">
				<div className="process-card">
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
					<p className="process-card__title">{t("process.option1")}</p>
					<p className="process-card__details">{t("process.desc1")}.</p>
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
					<p className="process-card__title">{t("process.option2")}</p>
					<p className="process-card__details">{t("process.desc2")}.</p>
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
					<p className="process-card__title">{t("process.option3")}</p>
					<p className="process-card__details">{t("process.desc3")}.</p>
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
					<p className="process-card__title">{t("process.option4")}</p>
					<p className="process-card__details">{t("process.desc4")}.</p>
					<div className="process-card__price">{t("process.free")}</div>
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
					<p className="process-card__title">{t("process.option5")}</p>
					<p className="process-card__details">{t("process.desc5")}.</p>
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
					<p className="process-card__title">{t("process.option6")}</p>
					<p className="process-card__details">{t("process.desc6")}.</p>
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
					<p className="process-card__title">{t("process.option7")}</p>
					<p className="process-card__details">{t("process.desc7")}.</p>
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
					<p className="process-card__title">{t("process.option8")}</p>
					<p className="process-card__details">{t("process.desc8")}.</p>
				</div>
			</div>
		</>
	);
};

export default Process;
