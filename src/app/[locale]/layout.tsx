import { Quicksand } from "next/font/google";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import ScrollToTop from "@/utils/ScrollToTop";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { setRequestLocale } from "next-intl/server";
import "@/scss/globals.scss";

const quicksand = Quicksand({
	variable: "--font-quicksand",
	weight: ["400", "500", "600"],
	subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.fvestavby.cz"),
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	// TODO: learn this
	if (!hasLocale(routing.locales, locale)) notFound();

	setRequestLocale(locale);

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
