import { getTranslations } from "next-intl/server";
import styles from "./Advantages.module.scss";

const advantagesData = [
	{
		title: "advantages.option1",
		desc: "advantages.desc1",
		img: "/icons/thunder-fve-stavby.png",
	},
	{
		title: "advantages.option2",
		desc: "advantages.desc2",
		img: "/icons/leaf-fve-stavby.png",
	},
	{
		title: "advantages.option3",
		desc: "advantages.desc3",
		img: "/icons/battery-charge-fve-stavby.png",
	},
];

const Advantages = async () => {
	const t = await getTranslations();

	return (
		<div>
			<h2 className={styles["advantages__title"]}>{t("advantages.title")}</h2>
			<div className={styles["advantages"]}>
				{advantagesData.map((advantage, index) => {
					return (
						<div key={index} className={styles["advantages-card"]}>
							<div className={styles["advantages-card__wrapper"]}>
								<p className={styles["advantages-card__title"]}>
									{t(advantage.title)}
								</p>
								<p className={styles["advantages__desc"]}>
									{t(advantage.desc)}.
								</p>
							</div>
							<img src={advantage.img} alt="" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Advantages;
