"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import "./PageTitle.scss";

type PageTitleProps = {
	title: string;
	img?: string;
	className?: string;
};

const PageTitle = ({ title, img, className }: PageTitleProps) => {
	const t = useTranslations();

	return (
		<div className={`page-title ${className}`}>
			{img && <img className="page-title__img" src={img} alt="" />}
			<nav>
				<Link className="page-nav__link" href="/">
					{t("home_title")}
				</Link>{" "}
				<span>|</span>{" "}
				<span style={{ color: "rgba(255, 255, 255, 0.5)" }}>{title}</span>
			</nav>
			<h1 className="page-title__title">{title}</h1>
		</div>
	);
};

export default PageTitle;
