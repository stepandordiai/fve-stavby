import { Quicksand } from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import ScrollToTop from "../utils/ScrollToTop";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./../scss/globals.scss";

const quicksand = Quicksand({
	variable: "--font-quicksand",
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	// TODO: learn this
	if (!hasLocale(routing.locales, locale)) {
		return notFound();
	}

	return (
		<html lang={locale}>
			<body className={quicksand.variable}>
				<ScrollToTop />
				<NextIntlClientProvider locale={locale}>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
