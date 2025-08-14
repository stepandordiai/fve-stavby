import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import { useEffect } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import img from "/img/7.jpg";
import userIcon from "/icons/user.png";
import "./AboutUs.scss";

const AboutUs = () => {
	const { t } = useTranslation();

	interface MembersData {
		name: string;
		position: string;
		linkedInUrl?: string;
	}

	const membersData: MembersData[] = [
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
			linkedInUrl: "https://linkedin.com/in/stepandordiai",
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

	useEffect(() => {
		const portfolio = document.querySelectorAll(".guarantees__grid-item");

		portfolio.forEach((creatorLink) => {
			const bgElement = document.createElement("div");

			creatorLink.appendChild(bgElement);

			bgElement.classList.add("bg-element");

			let mouseX;
			let mouseY;

			creatorLink.addEventListener("mousemove", (e) => {
				const rect = creatorLink.getBoundingClientRect();
				mouseX =
					(!isTouchDevice()
						? (e as MouseEvent).clientX
						: (e as TouchEvent).touches[0].clientX) - rect.left;
				mouseY =
					(!isTouchDevice()
						? (e as MouseEvent).clientY
						: (e as TouchEvent).touches[0].clientY) - rect.top;
				bgElement.style.top = mouseY + "px";
				bgElement.style.left = mouseX + "px";
				bgElement.classList.add("bg-element--active");
			});

			creatorLink.addEventListener("touchmove", (e) => {
				const rect = creatorLink.getBoundingClientRect();
				mouseX =
					(!isTouchDevice()
						? (e as MouseEvent).clientX
						: (e as TouchEvent).touches[0].clientX) - rect.left;
				mouseY =
					(!isTouchDevice()
						? (e as MouseEvent).clientY
						: (e as TouchEvent).touches[0].clientY) - rect.top;
				bgElement.style.top = mouseY + "px";
				bgElement.style.left = mouseX + "px";
				bgElement.classList.add("bg-element--active");
			});

			creatorLink.addEventListener("mouseleave", () => {
				bgElement.classList.remove("bg-element--active");
			});

			creatorLink.addEventListener("touchend", () => {
				bgElement.classList.remove("bg-element--active");
			});
		});
	}, []);

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Poznejte tým FVE – stavby s.r.o., specialisty na fotovoltaiku. Máme zkušenosti, technické know-how a osobní přístup k řešení solárních systémů na míru."
				/>
				<title>{t("about_us_title")} | FVE STAVBY</title>
				<link rel="canonical" href="https://fvestavby.cz/about-us" />
			</Helmet>
			<main>
				<PageTitle title={t("about_us_title")} img={img} />
				<div className="about-us">
					<p className="about-us__desc">
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
					<h2 className="our-team__title">{t("our_team.title")}</h2>
					<div className="our-team__grid">
						{membersData.map(({ name, position, linkedInUrl }, index) => {
							return (
								<div key={index} className="our-team__grid-item">
									<div className="img-wrapper">
										<img src={userIcon} alt="" loading="lazy" />
									</div>
									<p className="our-team__grid-item-name">{name}</p>
									<p className="our-team__grid-item-position">{position}</p>
									{linkedInUrl && (
										<a
											className="our-team__grid-item-link"
											href={linkedInUrl}
											target="_blank"
										>
											LinkedIn
										</a>
									)}
								</div>
							);
						})}
					</div>
					<h2 className="guarantees__title">{t("guarantees.title")}</h2>
					<div className="guarantees__grid">
						<div className="guarantees__grid-item">
							<p>12</p>
							<p>let na Střídač</p>
						</div>
						<div className="guarantees__grid-item">
							<p>15</p>
							<p>let na Fotovoltaické panely</p>
						</div>
						<div className="guarantees__grid-item">
							<p>25</p>
							<p>let Záruka na výkon panelů</p>
						</div>
						<div className="guarantees__grid-item">
							<p>5</p>
							<p>let na Montáž</p>
						</div>
						<div className="guarantees__grid-item">
							<p>10</p>
							<p>let na Montážní systém</p>
						</div>
						<div className="guarantees__grid-item">
							<p>2</p>
							<p>roky na Kabeláž</p>
						</div>
						<div className="guarantees__grid-item">
							<p>2</p>
							<p>roky na Zabezpečení AC/DC </p>
						</div>
						<div className="guarantees__grid-item">
							<p>6000</p>
							<p>cyklů na baterie</p>
						</div>
					</div>
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default AboutUs;
