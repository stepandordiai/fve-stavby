"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import "./GetInTouch.scss";

const GetInTouch = () => {
	const t = useTranslations();

	return (
		<div className="get-in-touch">
			<img
				className="get-in-touch__bg"
				src="/img/06-c.jpg"
				alt=""
				loading="lazy"
			/>
			<p className="get-in-touch__title">{t("get_in_touch_title")}</p>
			<Link href="/kontakty" className="get-in-touch__link">
				<span>{t("get_in_touch_link")}</span>
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 17L17 7M17 7H8M17 7V16"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</div>
	);
};

export default GetInTouch;
