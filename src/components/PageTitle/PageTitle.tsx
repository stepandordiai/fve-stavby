import { NavLink } from "react-router-dom";
import arrow from "/icons/arrow-upper-right-white.png";
import "./PageTitle.scss";

type PageTitleProps = {
	title: string;
	img?: string;
	linkPath?: string;
	linkName?: string;
	className?: string;
};

const PageTitle = ({
	title,
	img,
	linkPath,
	linkName,
	className,
}: PageTitleProps) => {
	return (
		<div className={`page-title ${className}`}>
			<h1 className="page-title__title">{title}</h1>
			{img && (
				<img className="page-title__img" src={img} alt="" loading="lazy" />
			)}
			{linkPath && (
				<NavLink className="page-title__link" to={linkPath}>
					<span>{linkName}</span>
					<img className="page-title__link-icon" src={arrow} alt="" />
				</NavLink>
			)}
		</div>
	);
};

export default PageTitle;
