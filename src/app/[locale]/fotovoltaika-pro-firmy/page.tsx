import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Advantages from "../../components/Advantages/Advantages";
import Partners from "../../components/Partners/Partners";
import Container from "../../components/Container/Container";
import Process from "../../components/Process/Process";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations({ locale });

	return {
		title: `${t("photovoltaics_for_companies_title")} | FVE STAVBY`,
		description: t("photovoltaics_for_companies_seo_desc"),
		alternates: {
			canonical: `/${locale}/fotovoltaika-pro-firmy`,
			languages: {
				cs: `/cs/fotovoltaika-pro-firmy`,
				en: `/en/fotovoltaika-pro-firmy`,
				"x-default": `/cs/fotovoltaika-pro-firmy`,
			},
		},
	};
}

export default async function PhotovoltaicsForCompanies() {
	const t = await getTranslations();

	return (
		<main>
			<Container>
				<PageTitle
					title={t("photovoltaics_for_companies_title")}
					img="/img/05-c.jpg"
				/>
				<div className="photovoltaics-for-companies">
					<p style={{ marginBottom: 25, textAlign: "justify" }}>
						{t("photovoltaics_for_companies_desc")}.
					</p>
					<Advantages />
					<Process />
					<Partners />
					<GetInTouch />
				</div>
			</Container>
		</main>
	);
}
