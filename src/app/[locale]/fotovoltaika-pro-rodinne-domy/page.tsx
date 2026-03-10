import { getTranslations } from "next-intl/server";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import Process from "../../components/Process/Process";
import Container from "../../components/Container/Container";
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
		title: `${t("photovoltaics_for_single_family_homes_title")} | FVE STAVBY`,
		description: t("photovoltaics_for_single_family_homes_seo_desc"),
		alternates: {
			canonical: `/${locale}/fotovoltaika-pro-rodinne-domy`,
			languages: {
				cs: `/cs/fotovoltaika-pro-rodinne-domy`,
				en: `/en/fotovoltaika-pro-rodinne-domy`,
				"x-default": `/cs/fotovoltaika-pro-rodinne-domy`,
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
