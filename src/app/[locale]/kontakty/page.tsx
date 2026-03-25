import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
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
	const t = await getTranslations({ locale, namespace: "contacts.meta" });
	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `/${l}/kontakty`]),
	);

	return {
		title: `${t("title")}`,
		description: t("description"),
		alternates: {
			canonical: `/${locale}/kontakty`,
			languages: {
				...languages,
				"x-default": `/${routing.defaultLocale}/kontakty`,
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
