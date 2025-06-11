import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import arrow from "/icons/arrow-upper-right-white.png";
import img from "/img/4.jpg";
import "./HomeTitle.scss";

const HomeTitle = () => {
	const { t } = useTranslation();

	// function handleHomeTitleImg() {
	// 	document
	// 		.querySelector(".home-title__img")
	// 		?.classList.add("home-title__img--active");
	// }

	return (
		<div className="home-title-wrapper">
			<div className="home-title">
				<img
					// onLoad={handleHomeTitleImg}
					className="home-title__img"
					src={img}
					alt=""
				/>
				<p className="loading__title">FVE STAVBY s.r.o.</p>
				<div className="home-title__details-container">
					<div className="home-title__details">
						<h1 className="home-title__title">FVE - stavby s.r.o.</h1>
						<h2 className="home-title__sec-title">{t("logo_title")}</h2>
						<h2 className="home-title__info">{t("home.title")}</h2>
					</div>
					<div className="home-title__link-container">
						<NavLink className="home-title__link" to={"/manuals"}>
							<span>{t("manuals_title")}</span>
							<img
								className="home-title__link-icon"
								src={arrow}
								alt=""
								loading="lazy"
							/>
						</NavLink>
						<NavLink className="home-title__link" to={"/contacts"}>
							<span>{t("home.contacts_link")}</span>
							<img
								className="home-title__link-icon"
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

export default HomeTitle;
