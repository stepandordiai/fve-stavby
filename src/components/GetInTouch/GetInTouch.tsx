import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import img from "/img/06-c.jpg";
import "./GetInTouch.scss";

const GetInTouch = () => {
	const { t } = useTranslation();

	return (
		<div className="get-in-touch">
			<img className="get-in-touch__bg" src={img} alt="" loading="lazy" />
			<p className="get-in-touch__title">{t("get_in_touch_title")}</p>
			<NavLink to="/contacts" className="get-in-touch__link">
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
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</NavLink>
		</div>
	);
};

export default GetInTouch;
