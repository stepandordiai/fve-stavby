import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import Mission from "../../components/Mission/Mission";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/assets/img/7.jpg";
import userIcon from "/assets/icons/user.png";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
	const { t } = useTranslation();

	const membersData = [
		{
			name: "Kristián",
			position: "Projektant",
		},
		{
			name: "Veronika",
			position: "Vedoucí kanceláře",
		},
		{
			name: "Rostislav",
			position: "Obchodní ředitel",
		},
		{
			name: "Stepan",
			position: "IT Specialista",
		},
		{
			name: "Alexandr",
			position: "Logistika",
		},
		{
			name: "Aneta",
			position: "Kancelář Frontoffice",
		},
		{
			name: "Zuzana",
			position: "Kancelář Backoffice",
		},
		{
			name: "René",
			position: "Vedoucí Instalačních týmů",
		},
		{
			name: "Tomáš",
			position: "Výkonný ředitel",
		},
	];

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("about_us_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/about-us" />
			</Helmet>
			<PageTitle title={"O nás"} img={img} />
			<div className={styles["about-us"]}>
				<h2 className={styles["about-us__title"]}>O nás</h2>
				<p className={styles["about-us__desc"]}>
					V dnešní době, kdy roste důraz na udržitelnost a energetickou
					soběstačnost, se fotovoltaika stává klíčovým řešením pro domácnosti i
					firmy. Výběr správného partnera pro realizaci fotovoltaického systému
					je zásadní. Jsme tým zkušených profesionálů. Každý z nás se v
					energetice pohybuje již dlouhá léta a nabízíme komplexní služby, které
					zaručují maximální spokojenost zákazníků.
					<br />
					<br />
					Především klademe důraz na individuální přístup. Každý projekt je pro
					nás jedinečný a věnujeme mu maximální péči od prvotní konzultace, přes
					projekt, až po samotnou instalaci a následný servis. Naši odborníci
					Vám pomohou vybrat optimální řešení, které bude odpovídat Vašim
					potřebám, finančním možnostem a charakteru Vaší nemovitosti.
					<br />
					<br />
					Dbáme na kvalitu použitých materiálů a technologií. Spolupracujeme s
					předními světovými výrobci, což zajišťuje dlouhou životnost a vysokou
					efektivitu našich systémů. Kromě toho Vám pomůžeme s administrativou a
					získáním dotací, abyste měli celý proces co nejjednodušší.
					<br />
					<br />
					Naší prioritou je transparentnost, spolehlivost a budování
					dlouhodobých vztahů. S námi získáte nejen kvalitní produkt, ale také
					jistotu, že se o Vás postaráme i po dokončení instalace. Věříme, že
					investice do fotovoltaiky má smysl, a rádi Vás na této cestě
					podpoříme. Vyberte si nás a získejte spolehlivého partnera pro vaši
					energetickou budoucnost.
				</p>
				<h2 className={styles["our-team__title"]}>Náš tým</h2>
				<div className={styles["our-team__grid"]}>
					{membersData.map(({ name, position }, index) => {
						return (
							<div key={index} className={styles["our-team__grid-item"]}>
								<div className={styles["img-wrapper"]}>
									<img src={userIcon} alt="" />
								</div>
								<p className={styles["our-team__grid-item-name"]}>{name}</p>
								<p className={styles["our-team__grid-item-position"]}>
									{position}
								</p>
							</div>
						);
					})}
				</div>
				<h2 className={styles["guarantees__title"]}>Záruky FVE STAVBY</h2>
				<div className={styles["guarantees__grid"]}>
					<div className={styles["guarantees__grid-item"]}>
						<p>10</p>
						<p>let na střídač</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>až 8000</p>
						<p>cyklů na baterie</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>15</p>
						<p>let na fotovoltaické panely</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>25</p>
						<p>let na záruka na výkon panelů</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>10</p>
						<p>let na montážní systém</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>2</p>
						<p>roky na kabeláž</p>
					</div>
					<div className={styles["guarantees__grid-item"]}>
						<p>2</p>
						<p>roky na zabezpečení AC/DC </p>
					</div>
				</div>
				<Mission />
				<GetInTouch />
			</div>
		</>
	);
};

export default AboutUs;
