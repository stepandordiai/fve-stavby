import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import arrow from "/icons/arrow-upper-right-white.png";
import "./PageTitle.scss";

type PageTitleProps = {
	title: string;
	img: string;
	linkPath: string;
};

const PageTitle = ({ title, img, linkPath }: PageTitleProps) => {
	const { t } = useTranslation();

	return (
		<>
			<div className="page-title">
				<h1 className="page-title__title">{title}</h1>
				<img className="page-title__img" src={img} alt="" loading="lazy" />
				{linkPath && (
					<NavLink className="page-title__link" to={linkPath}>
						<span>{t("manuals_title")}</span>
						<img
							className="page-title__link-icon"
							src={arrow}
							alt=""
							loading="lazy"
						/>
					</NavLink>
				)}
			</div>
		</>
	);
};

export default PageTitle;
