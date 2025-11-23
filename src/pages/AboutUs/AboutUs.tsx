import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/img/07-c.jpg";
import userIcon from "/icons/user.png";
import "./AboutUs.scss";

interface Member {
	name: string;
	position: string;
	linkedInUrl?: string;
	email?: string;
}

const membersData: Member[] = [
	{
		name: "Kristián",
		position: "our_team.member1",
		email: "kristian.janko@email.cz",
	},
	{
		name: "Veronika",
		position: "our_team.member2",
	},
	{
		name: "Rostislav",
		position: "our_team.member3",
		email: "rostislav@fvestavby.cz",
	},
	{
		name: "Štěpán",
		position: "our_team.member4",
		linkedInUrl: "https://linkedin.com/in/stepandordiai",
		email: "stepandordiai@gmail.com",
	},
	{
		name: "Alexandr",
		position: "our_team.member5",
	},
	{
		name: "Aneta",
		position: "our_team.member6",
	},
	{
		name: "Zuzana",
		position: "our_team.member7",
	},
	{
		name: "René",
		position: "our_team.member8",
	},
	{
		name: "Tomáš",
		position: "our_team.member9",
		email: "tomas@fvestavby.cz",
	},
];

interface Guarantee {
	years: number;
	desc: string;
}

const guaranteesData: Guarantee[] = [
	{ years: 12, desc: "let na Střídač" },
	{ years: 15, desc: "let na Fotovoltaické panely" },
	{ years: 25, desc: "let Záruka na výkon panelů" },
	{ years: 5, desc: "let na Montáž" },
	{ years: 10, desc: "let na Montážní systém" },
	{ years: 2, desc: "roky na Kabeláž" },
	{ years: 2, desc: "roky na Zabezpečení AC/DC" },
	{ years: 6000, desc: "cyklů na baterie" },
];

const AboutUs = () => {
	const { t } = useTranslation();

	// FIXME:
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
				<meta name="description" content={t("about_us_seo_desc")} />
				<title>{t("about_us_title")} | FVE STAVBY</title>
				<link rel="canonical" href="https://www.fvestavby.cz/about-us" />
			</Helmet>
			<main>
				<Container>
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
							{membersData.map(
								({ name, position, linkedInUrl, email }, index) => {
									return (
										<div key={index} className="our-team__grid-item">
											<div className="img-wrapper">
												<img src={userIcon} alt="" loading="lazy" />
											</div>
											<p className="our-team__grid-item-name">{name}</p>
											<p className="our-team__grid-item-position">
												{t(position)}
											</p>
											<div
												style={{
													display: "flex",
													justifyContent: "flex-start",
													alignItems: "flex-start",
													flexDirection: "column",
													rowGap: 5,
												}}
											>
												{email && (
													<a
														className="our-team__grid-item-link"
														href={`mailto: ${email}`}
														target="_blank"
													>
														{email}
													</a>
												)}
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
										</div>
									);
								}
							)}
						</div>
						<h2 className="guarantees__title">{t("guarantees.title")}</h2>
						<div className="guarantees__grid">
							{guaranteesData.map((guarantee, i) => {
								return (
									<div key={i} className="guarantees__grid-item">
										<span>{guarantee.years}</span>
										<span>{guarantee.desc}</span>
									</div>
								);
							})}
						</div>
						<GetInTouch />
					</div>
				</Container>
			</main>
		</>
	);
};

export default AboutUs;
