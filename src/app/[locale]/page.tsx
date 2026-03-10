import { getTranslations } from "next-intl/server";
import Process from "../components/Process/Process";
import WhyUs from "../components/WhyUs/WhyUs";
import Partners from "../components/Partners/Partners";
import Stats from "../components/Stats/Stats";
import Link from "next/link";
import HomeAboutCompany from "../components/HomeAboutCompany/HomeAboutCompany";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import WhySolar from "../components/WhySolar/WhySolar";
import Container from "../components/Container/Container";
import type { Metadata } from "next";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations({ locale });

	return {
		metadataBase: new URL("https://www.fvestavby.cz"),
		title: `${t("logo_title")} | FVE STAVBY`,
		description: t("home_seo_desc"),
		alternates: {
			canonical: `/${locale}`,
			languages: {
				cs: "/cs",
				en: "/en",
				"x-default": "/cs",
			},
		},
	};
}

export default async function Home() {
	const t = await getTranslations();

	return (
		<main>
			<Container>
				<section className="home-hero">
					<div className="home-hero-inner">
						<img
							className="home-hero-inner__bg-img"
							src="/img/01-c.jpg"
							alt=""
						/>
						<p className="loading__title">FVE STAVBY</p>
						<div className="home-top__details-container">
							<div className="home-top__details">
								<h1 className="home-top__title">FVE - stavby s.r.o.</h1>
								<h2 className="home-top__sec-title">{t("logo_title")}</h2>
								<h2 className="home-top__info">{t("home.title")}</h2>
							</div>
							<div className="home-top__link-container">
								<Link className="home-top__link" href="/manualy">
									<span>{t("manuals_title")}</span>
									<svg
										width="32px"
										height="32px"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 17L17 7M17 7H8M17 7V16"
											stroke="currentColor"
											strokeWidth="1"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Link>
								<Link className="home-top__link" href="/kontakty">
									<span>{t("home.contacts_link")}</span>
									<svg
										width="32px"
										height="32px"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 17L17 7M17 7H8M17 7V16"
											stroke="currentColor"
											strokeWidth="1"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<div className="home">
					<HomeAboutCompany />
					<WhyUs />
					<WhySolar />
					<Process />
					<Stats />
					<Partners />
					<GetInTouch />
				</div>
			</Container>
		</main>
	);
}
