import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutUsClient from "./AboutUsClient";
import "./styles.scss";

interface Member {
	name: string;
	position: string;
	linkedInUrl?: string;
	email?: string;
}

const members: Member[] = [
	{
		name: "Jiří Faltin",
		position: "our_team.member3",
		email: "info@fvestavby.cz",
	},
	{
		name: "Kristián",
		position: "our_team.member1",
		email: "kristian.janko@email.cz",
	},
	{
		name: "Štěpán",
		position: "our_team.member4",
		linkedInUrl: "https://linkedin.com/in/stepandordiai",
		email: "stepandordiai@gmail.com",
	},
];

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "aboutUs.meta" });

	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${l}/o-nas`]),
	);

	return {
		title: `${t("title")} | FVE STAVBY`,
		description: t("description"),
		alternates: {
			canonical: `/${locale}/o-nas`,
			languages: {
				...languages,
				"x-default": `/${routing.defaultLocale}/o-nas`,
			},
		},
	};
}

export default async function AboutUs() {
	const t = await getTranslations();

	return (
		<main>
			<Container>
				<PageTitle title={t("about_us_title")} img="/img/07-c.jpg" />
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
						{members.map(({ name, position, linkedInUrl, email }, index) => {
							return (
								<div key={index} className="our-team__grid-item">
									<div className="img-wrapper">
										<img src="/icons/user.png" alt="" loading="lazy" />
									</div>
									<p className="our-team__grid-item-name">{name}</p>
									<p className="our-team__grid-item-position">{t(position)}</p>
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
												href={`mailto:${email}`}
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
						})}
					</div>
					<h2 className="guarantees__title">{t("guarantees.title")}</h2>
					<AboutUsClient />
					<GetInTouch />
				</div>
			</Container>
		</main>
	);
}
