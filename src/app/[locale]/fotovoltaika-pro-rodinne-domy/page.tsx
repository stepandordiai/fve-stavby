import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PageTitle from "@/components/PageTitle/PageTitle";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Partners from "@/components/Partners/Partners";
import Benefits from "@/components/Benefits/Benefits";
import Process from "@/components/Process/Process";
import Container from "@/components/Container/Container";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "photovoltaicsForSingleFamilyHomes.meta",
	});
	const page = "fotovoltaika-pro-rodinne-domy";
	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `/${l}/${page}`]),
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

export default async function PhotovoltaicsForSingleFamilyHomes() {
	const t = await getTranslations();

	return (
		<main>
			<Container>
				<PageTitle
					title={t("photovoltaics_for_single_family_homes_title")}
					img="/img/04-c.jpg"
				/>
				<div className="photovoltaics-for-single-family-homes">
					<Benefits />
					<Process />
					<Partners />
					<GetInTouch />
				</div>
			</Container>
		</main>
	);
}
