import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import AboutUsClient from "./AboutUsClient";
import OurTeam from "@/components/OurTeam/OurTeam";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "aboutUs.meta" });
	const page = "o-nas";
	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${l}/${page}`]),
	);

	return {
		title: `${t("title")}`,
		description: t("description"),
		alternates: {
			canonical: `/${locale}/${page}`,
			languages: {
				...languages,
				"x-default": `/${routing.defaultLocale}/${page}`,
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
					<OurTeam />
					<h2 className="guarantees__title">{t("guarantees.title")}</h2>
					<AboutUsClient />
					<GetInTouch />
				</div>
			</Container>
		</main>
	);
}
