import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import arrow from "/icons/arrow-upper-right-white.png";
import img from "/img/4.jpg";
import "./HomeTop.scss";

const HomeTop = () => {
	const { t } = useTranslation();

	return (
		<div className="home-top-wrapper">
			<div className="home-top">
				<img className="home-top__img" src={img} alt="" />
				<p className="loading__title">FVE STAVBY</p>
				<div className="home-top__details-container">
					<div className="home-top__details">
						<h1 className="home-top__title">FVE - stavby s.r.o.</h1>
						<h2 className="home-top__sec-title">{t("logo_title")}</h2>
						<h2 className="home-top__info">{t("home.title")}</h2>
					</div>
					<div className="home-top__link-container">
						<NavLink className="home-top__link" to={"/manuals"}>
							<span>{t("manuals_title")}</span>
							<img
								className="home-top__link-icon"
								src={arrow}
								alt=""
								loading="lazy"
							/>
						</NavLink>
						<NavLink className="home-top__link" to={"/contacts"}>
							<span>{t("home.contacts_link")}</span>
							<img
								className="home-top__link-icon"
								src={arrow}
								alt=""
								loading="lazy"
							/>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeTop;
