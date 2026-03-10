import { MetadataRoute } from "next";

const pages = [
	"",
	"o-nas",
	"fotovoltaika-pro-rodinne-domy",
	"fotovoltaika-pro-firmy",
	"spolecenstvi-vlastniku-jednotek",
	"nase-instalace",
	"kontakty",
	"manualy",
];
const locales = ["cs", "en"];

const BASE_URL = "https://www.fvestavby.cz";

const alternates = (path: string) => ({
	...Object.fromEntries(
		locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`]),
	),
});

export default function sitemap(): MetadataRoute.Sitemap {
	return locales.flatMap((locale) =>
		pages.map((page) => ({
			// TODO: learn this
			url: `${BASE_URL}/${locale}/${page}`.replace(/\/$/, ""),
			lastUpdated: new Date(),
			changeFrequency: "monthly",
			priority: page === "" ? 1 : 0.8,
			alternates: {
				languages: alternates(page ? `/${page}` : ""),
			},
		})),
	);
}
