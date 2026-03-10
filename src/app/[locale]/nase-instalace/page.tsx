import OurInstallationClient from "./OurInstallationClient";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations({ locale });

	return {
		metadataBase: new URL("https://www.fvestavby.cz"),
		title: `${t("our_installation_title")} | FVE STAVBY`,
		description: t("our_installation_seo_desc"),
		alternates: {
			canonical: `/${locale}/nase-instalace`,
			languages: {
				cs: `/cs/nase-instalace`,
				en: `/en/nase-instalace`,
				"x-default": `/cs/nase-instalace`,
			},
		},
	};
}

export default function OurInstallation() {
	return <OurInstallationClient />;
}
