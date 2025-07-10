import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import cs from "./assets/translations/cs/translation.json";
import en from "./assets/translations/en/translation.json";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			cs: {
				translation: cs,
			},
			en: {
				translation: en,
			},
		},

		fallbackLng: "cs",

		detection: {
			order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],

			caches: ["localStorage", "cookie"],
		},

		interpolation: {
			escapeValue: false,
		},
	});
