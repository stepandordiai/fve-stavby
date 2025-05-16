import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/img/7.jpg";
import userIcon from "/icons/user.png";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
	const { t } = useTranslation();

	const membersData = [
		{
			name: "Kristián",
			position: t("our_team.member1"),
		},
		{
			name: "Veronika",
			position: t("our_team.member2"),
		},
		{
			name: "Rostislav",
			position: t("our_team.member3"),
		},
		{
			name: "Štěpán",
			position: t("our_team.member4"),
		},
		{
			name: "Alexandr",
			position: t("our_team.member5"),
		},
		{
			name: "Aneta",
			position: t("our_team.member6"),
		},
		{
			name: "Zuzana",
			position: t("our_team.member7"),
		},
		{
			name: "René",
			position: t("our_team.member8"),
		},
		{
			name: "Tomáš",
			position: t("our_team.member9"),
		},
	];

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("about_us_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/about-us" />
			</Helmet>
			<PageTitle title={t("about_us_title")} img={img} />
			<div className={styles["about-us"]}>
				<h2 className={styles["about-us__title"]}>{t("about_us_title")}</h2>
				<p className={styles["about-us__desc"]}>
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
				<h2 className={styles["our-team__title"]}>{t("our_team.title")}</h2>
				<div className={styles["our-team__grid"]}>
					{membersData.map(({ name, position }, index) => {
						return (
							<div key={index} className={styles["our-team__grid-item"]}>
								<div className={styles["img-wrapper"]}>
									<img src={userIcon} alt="" loading="lazy" />
								</div>
								<p className={styles["our-team__grid-item-name"]}>{name}</p>
								<p className={styles["our-team__grid-item-position"]}>
									{position}
								</p>
							</div>
						);
					})}
				</div>
				<h2 className={styles["guarantees__title"]}>
					{t("guarantees.title")} FVE STAVBY
				</h2>
				<div className={styles["guarantees__grid"]}>
					<div className={styles["guarantees__grid-item"]}>
						<p>10</p>
						<p>{t("guarantees.guarantee1")}</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>až 8000</p>
						<p>{t("guarantees.guarantee2")}</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>15</p>
						<p>{t("guarantees.guarantee3")}</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>25</p>
						<p>{t("guarantees.guarantee4")}</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>10</p>
						<p>{t("guarantees.guarantee5")}</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>2</p>
						<p>{t("guarantees.guarantee6")}</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>2</p>
						<p>{t("guarantees.guarantee7")}</p>
					</div>
				</div>
				<GetInTouch />
			</div>
		</>
	);
};

export default AboutUs;
