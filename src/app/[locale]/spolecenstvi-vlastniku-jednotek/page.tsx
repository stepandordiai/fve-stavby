import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PageTitle from "@/components/PageTitle/PageTitle";
import Container from "@/components/Container/Container";
import SVJClient from "./SVJClient";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations({ locale, namespace: "svj.meta" });
	const page = "spolecenstvi-vlastniku-jednotek";
	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `/${l}/${page}`]),
	);

	return {
		title: t("title"),
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
