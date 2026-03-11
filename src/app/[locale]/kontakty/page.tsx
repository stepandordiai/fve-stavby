import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import ContactsClient from "./ContactsClient";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations({ locale });

	return {
		title: `${t("contacts_title")} | FVE STAVBY`,
		description: t("contacts_seo_desc"),
		alternates: {
			canonical: `/${locale}/kontakty`,
			languages: {
				cs: `/cs/kontakty`,
				en: `/en/kontakty`,
				"x-default": `/cs/kontakty`,
			},
		},
	};
}

export default async function Contacts() {
	const t = await getTranslations();

	return (
		<main>
			<Container>
				<PageTitle title={t("contacts_title")} img="/img/09-c.jpg" />
				<ContactsClient />
			</Container>
		</main>
	);
}
