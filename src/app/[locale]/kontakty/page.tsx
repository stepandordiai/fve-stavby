import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PageTitle from "@/components/PageTitle/PageTitle";
import Container from "@/components/Container/Container";
import ContactsClient from "./ContactsClient";
import OurTeam from "@/components/OurTeam/OurTeam";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "contacts.meta" });
	const page = "kontakty";
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

export default async function Contacts() {
	const t = await getTranslations();

	return (
		<main>
			<Container>
				<PageTitle title={t("contacts_title")} img="/img/09-c.jpg" />
				<ContactsClient />
				<div className="contacts-our-team-container">
					<OurTeam />
				</div>
			</Container>
		</main>
	);
}
