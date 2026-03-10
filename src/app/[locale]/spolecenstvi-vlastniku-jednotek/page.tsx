import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import SVJClient from "./SVJClient";
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
		title: "SVJ | FVE STAVBY",
		description: t("svj_seo_desc"),
		alternates: {
			canonical: `/${locale}/spolecenstvi-vlastniku-jednotek`,
			languages: {
				cs: `/cs/spolecenstvi-vlastniku-jednotek`,
				en: `/en/spolecenstvi-vlastniku-jednotek`,
				"x-default": `/cs/spolecenstvi-vlastniku-jednotek`,
			},
		},
	};
}

export default async function SVJ() {
	const t = await getTranslations();

	return (
		<main className="svj">
			<Container>
				<PageTitle title={t("svj_title")} className="bg-max-flow" />
				<div className="svj__inner">
					<h2 className="svj__title">{t("svj_sec_title")}</h2>
					<SVJClient />
				</div>
			</Container>
		</main>
	);
}
