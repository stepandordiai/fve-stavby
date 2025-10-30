import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import img from "/img/06-c.jpg";
import arrowIcon from "/icons/arrow-upper-right-white.png";
import "./GetInTouch.scss";

const GetInTouch = () => {
	const { t } = useTranslation();

	return (
		<div className="get-in-touch">
			<img className="get-in-touch__bg" src={img} alt="" loading="lazy" />
			<p className="get-in-touch__title">{t("get_in_touch_title")}</p>
			<NavLink to={"/contacts"} className="get-in-touch__link">
				<span>{t("get_in_touch_link")}</span>
				<img className="get-in-touch__link-icon" src={arrowIcon} alt="" />
			</NavLink>
		</div>
	);
};

export default GetInTouch;
