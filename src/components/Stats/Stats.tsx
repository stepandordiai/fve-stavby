import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Stats.scss";

const statsData = [
	{
		value: 420,
		month_l: "stats.jan_l",
		month_m: "stats.jan_m",
		month_s: "stats.jan_s",
	},
	{
		value: 610,
		month_l: "stats.feb_l",
		month_m: "stats.feb_m",
		month_s: "stats.feb_s",
	},
	{
		value: 980,
		month_l: "stats.mar_l",
		month_m: "stats.mar_m",
		month_s: "stats.mar_s",
	},
	{
		value: 1220,
		month_l: "stats.apr_l",
		month_m: "stats.apr_m",
		month_s: "stats.apr_s",
	},
	{
		value: 1480,
		month_l: "stats.may_l",
		month_m: "stats.may_m",
		month_s: "stats.may_s",
	},
	{
		value: 1380,
		month_l: "stats.jun_l",
		month_m: "stats.jun_m",
		month_s: "stats.jun_s",
	},
	{
		value: 1570,
		month_l: "stats.jul_l",
		month_m: "stats.jul_m",
		month_s: "stats.jul_s",
	},
	{
		value: 1440,
		month_l: "stats.aug_l",
		month_m: "stats.aug_m",
		month_s: "stats.aug_s",
	},
	{
		value: 1080,
		month_l: "stats.sep_l",
		month_m: "stats.sep_m",
		month_s: "stats.sep_s",
	},
	{
		value: 890,
		month_l: "stats.oct_l",
		month_m: "stats.oct_m",
		month_s: "stats.oct_s",
	},
	{
		value: 390,
		month_l: "stats.nov_l",
		month_m: "stats.nov_m",
		month_s: "stats.nov_s",
	},
	{
		value: 310,
		month_l: "stats.dec_l",
		month_m: "stats.dec_m",
		month_s: "stats.dec_s",
	},
];

const Stats = () => {
	const { t } = useTranslation();

	// FIXME:
	useEffect(() => {
		const candlesWrapper = document.querySelector(
			".candles-wrapper"
		) as HTMLDivElement | null;

		const maxCandleHeight = 500;

		if (candlesWrapper) {
			const candles = document.querySelectorAll(
				".candle"
			) as NodeListOf<HTMLDivElement>;
			candles.forEach((el) => {
				let interval = 10000;
				let isActivated = false;
				document.addEventListener("scroll", () => {
					const candlesWrapperRect = candlesWrapper.getBoundingClientRect();
					if (candlesWrapperRect.top < window.innerHeight) {
						if (!isActivated) {
							let startValue = 0;
							const dataFinalValue = Number(el.dataset.finalValue);
							function start() {
								let duration = Math.floor(interval / dataFinalValue);
								let counter = setTimeout(() => {
									startValue += 1;
									el.dataset.initValue = startValue + "kW";
									el.style.height = (startValue / maxCandleHeight) * 100 + "px";
									if (startValue == dataFinalValue) {
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
			<div style={{ margin: "25px 0" }}>
				<h2 className="stats__title">{t("stats.title")}</h2>
				<p>{t("stats.desc")}</p>
			</div>
			<div className="stats">
				<div className="candles-wrapper">
					{statsData.map((stat) => {
						return (
							<div
								className="candle"
								data-month-l={t(stat.month_l)}
								data-month-m={t(stat.month_m)}
								data-month-s={t(stat.month_s)}
								data-init-value="0kW"
								data-final-value={stat.value}
							></div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Stats;
