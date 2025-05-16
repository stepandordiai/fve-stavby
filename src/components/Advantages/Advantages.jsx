import { useTranslation } from "react-i18next";
import leafIcon from "/icons/leaf-fve-stavby.png";
import batteryIcon from "/icons/battery-charge-fve-stavby.png";
import thunderIcon from "/icons/thunder-fve-stavby.png";
import styles from "./Advantages.module.scss";

const Advantages = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h2 className={styles["advantages__title"]}>{t("advantages.title")}</h2>
			<div className={styles["advantages"]}>
				<div className={styles["advantages-card"]}>
					<div className={styles["advantages-card__wrapper"]}>
						<p className={styles["advantages-card__title"]}>
							{t("advantages.option1")}
						</p>
						<p className={styles["advantages__desc"]}>
							{t("advantages.desc1")}.
						</p>
					</div>
					<img src={thunderIcon} alt="" />
				</div>
				<div className={styles["advantages-card"]}>
					<p className={styles["advantages-card__title"]}>
						{t("advantages.option2")}
					</p>
					<p className={styles["advantages-card__desc"]}>
						{t("advantages.desc2")}.
					</p>
					<img src={leafIcon} alt="" />
				</div>
				<div className={styles["advantages-card"]}>
					<p className={styles["advantages-card__title"]}>
						{t("advantages.option3")}
					</p>
					<p className={styles["advantages-card__desc"]}>
						{t("advantages.desc3")}.
					</p>
					<img src={batteryIcon} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Advantages;
