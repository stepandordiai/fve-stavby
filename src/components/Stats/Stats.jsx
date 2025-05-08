import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Stats.scss";

const Stats = () => {
	const { t } = useTranslation();

	useEffect(() => {
		let interval = 1000;
		const candlesWrapper = document.querySelector(".candles-wrapper");

		if (candlesWrapper) {
			document.querySelectorAll(".candle").forEach((el) => {
				let isActivated = false;
				document.addEventListener("scroll", () => {
					const candlesWrapperRect =
						candlesWrapper.getBoundingClientRect().bottom;
					if (candlesWrapperRect < window.innerHeight) {
						el.style.animation = "animateCandle 4s ease-in-out forwards";
						if (!isActivated) {
							let startValue = 0;
							let duration = Math.floor(interval / el.dataset.finalValue);
							function start() {
								let counter = setTimeout(() => {
									startValue += 1;
									el.dataset.initValue = startValue + "kW";
									// duration += 0.5;
									if (startValue == el.dataset.finalValue) {
										clearTimeout(counter);
									} else {
										start();
									}
								}, duration);
							}
							start();
						}
						isActivated = true;
					}
				});
			});
		}
	}, []);

	return (
		<>
			<h2 className="stats__title">{t("stats.title")}</h2>
			<div className="stats">
				<div className="candles-wrapper">
					<div
						className="candle"
						data-month-l={t("stats.jan_l")}
						data-month-m={t("stats.jan_m")}
						data-month-s={t("stats.jan_s")}
						style={{
							"--candle-height": "50px",
						}}
						data-init-value="0kW"
						data-final-value="420"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.feb_l")}
						data-month-m={t("stats.feb_m")}
						data-month-s={t("stats.feb_s")}
						style={{
							"--candle-height": "100px",
						}}
						data-init-value="0kW"
						data-final-value="610"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.mar_l")}
						data-month-m={t("stats.mar_m")}
						data-month-s={t("stats.mar_s")}
						style={{
							"--candle-height": "150px",
						}}
						data-init-value="0kW"
						data-final-value="980"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.apr_l")}
						data-month-m={t("stats.apr_m")}
						data-month-s={t("stats.apr_s")}
						style={{
							"--candle-height": "200px",
						}}
						data-init-value="0kW"
						data-final-value="1220"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.may_l")}
						data-month-m={t("stats.may_m")}
						data-month-s={t("stats.may_s")}
						style={{
							"--candle-height": "300px",
						}}
						data-init-value="0kW"
						data-final-value="1480"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.jun_l")}
						data-month-m={t("stats.jun_m")}
						data-month-s={t("stats.jun_s")}
						style={{
							"--candle-height": "325px",
						}}
						data-init-value="0kW"
						data-final-value="1380"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.jul_l")}
						data-month-m={t("stats.jul_m")}
						data-month-s={t("stats.jul_s")}
						style={{
							"--candle-height": "225px",
						}}
						data-init-value="0kW"
						data-final-value="1570"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.aug_l")}
						data-month-m={t("stats.aug_m")}
						data-month-s={t("stats.aug_s")}
						style={{
							"--candle-height": "150px",
						}}
						data-init-value="0kW"
						data-final-value="1440"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.sep_l")}
						data-month-m={t("stats.sep_m")}
						data-month-s={t("stats.sep_s")}
						style={{
							"--candle-height": "125px",
						}}
						data-init-value="0kW"
						data-final-value="1080"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.oct_l")}
						data-month-m={t("stats.oct_m")}
						data-month-s={t("stats.oct_s")}
						style={{
							"--candle-height": "100px",
						}}
						data-init-value="0kW"
						data-final-value="890"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.nov_l")}
						data-month-m={t("stats.nov_m")}
						data-month-s={t("stats.nov_s")}
						style={{
							"--candle-height": "50px",
						}}
						data-init-value="0kW"
						data-final-value="390"
					></div>
					<div
						className="candle"
						data-month-l={t("stats.dec_l")}
						data-month-m={t("stats.dec_m")}
						data-month-s={t("stats.dec_s")}
						style={{
							"--candle-height": "25px",
						}}
						data-init-value="0kW"
						data-final-value="310"
					></div>
				</div>
			</div>
		</>
	);
};

export default Stats;
