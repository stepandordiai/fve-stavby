import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./PageTitle.scss";

type PageTitleProps = {
	title: string;
	img?: string;
	className?: string;
};

const PageTitle = ({ title, img, className }: PageTitleProps) => {
	const { t } = useTranslation();

	return (
		<div className={`page-title ${className}`}>
			{img && <img className="page-title__img" src={img} alt="" />}
			<nav>
				<NavLink className="page-nav__link" to="/">
					{t("home_title")}
				</NavLink>{" "}
				<span>|</span>{" "}
				<span style={{ color: "rgba(255, 255, 255, 0.5)" }}>{title}</span>
			</nav>
			<h1 className="page-title__title">{title}</h1>
		</div>
	);
};

export default PageTitle;
