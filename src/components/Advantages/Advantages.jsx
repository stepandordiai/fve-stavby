import leafIcon from "/assets/icons/leaf-fve-stavby.png";
import batteryIcon from "/assets/icons/battery-charge-fve-stavby.png";
import thunderIcon from "/assets/icons/thunder-fve-stavby.png";
import styles from "./Advantages.module.scss";

const Advantages = () => {
	return (
		<div>
			<h2 className={styles["advantages__title"]}>Výhody</h2>
			<div className={styles["advantages"]}>
				<div className={styles["advantages-card"]}>
					<div className={styles["advantages-card__wrapper"]}>
						<p className={styles["advantages-card__title"]}>
							Kontrolovat náklady na energii
						</p>
						<p className={styles["advantages__desc"]}>
							Se solární energií si můžete zajistit předvídatelné náklady na
							elektřinu na roky dopředu
						</p>
					</div>
					<img src={thunderIcon} alt="" />
				</div>
				<div className={styles["advantages-card"]}>
					<p className={styles["advantages-card__title"]}>
						Pomoci životnímu prostředí
					</p>
					<p className={styles["advantages-card__desc"]}>
						Solární energie vytváří o 91 % méně znečištění CO2 než zemní plyn a
						o 96 % méně CO2 než uhlí
					</p>
					<img src={leafIcon} alt="" />
				</div>
				<div className={styles["advantages-card"]}>
					<p className={styles["advantages-card__title"]}>
						Energetická nezávislost
					</p>
					<p className={styles["advantages-card__desc"]}>
						Čistá solární energie nám poskytuje neomezený spolehlivý zdroj
						energie
					</p>
					<img src={batteryIcon} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Advantages;
