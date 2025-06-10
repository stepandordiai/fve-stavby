import { useTranslation } from "react-i18next";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LngSelect from "../LngSelect/LngSelect";
import { useEffect } from "react";
import logo from "/logo/solar-panel.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.addEventListener("mouseover", (e) => {
			const headerCard = document.querySelector(".header-card");
			const headerDd = document.querySelector(".products");
			const headerBottomDd = document.querySelector(".header-bottom-dd");
			const headerCardLinks = document.querySelectorAll(".header-card__link");
			if (
				e.target == headerCard ||
				e.target == headerDd ||
				e.target == headerCardLinks[0] ||
				e.target == headerCardLinks[1] ||
				e.target == headerCardLinks[2] ||
				e.target == headerCardLinks[3] ||
				e.target == headerBottomDd
			) {
				document
					.querySelector(".header-card")
					.classList.add("header-card--active");
			} else {
				document
					.querySelector(".header-card")
					.classList.remove("header-card--active");
			}
		});

		// For mobile
		document.addEventListener("touchstart", (e) => {
			const headerCard = document.querySelector(".header-card");
			const headerDd = document.querySelector(".products");
			const headerBottomDd = document.querySelector(".header-bottom-dd");
			const headerCardLinks = document.querySelectorAll(".header-card__link");
			if (
				e.target == headerCard ||
				e.target == headerDd ||
				e.target == headerCardLinks[0] ||
				e.target == headerCardLinks[1] ||
				e.target == headerCardLinks[2] ||
				e.target == headerCardLinks[3] ||
				e.target == headerBottomDd
			) {
				document
					.querySelector(".header-card")
					.classList.add("header-card--active");
			} else {
				document
					.querySelector(".header-card")
					.classList.remove("header-card--active");
			}
		});

		//  Close header card on link click
		document.querySelectorAll(".header-card__link").forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelector(".header-card")
					.classList.remove("header-card--active");
			});
		});
	}, []);

	const inactiveHeaderLink = "header__link";
	const activeHeaderLink = "header__link header__link--active bg--acent";

	return (
		<>
			<header className="header">
				<div className="header-top">
					<NavLink to={"/"} className="header-top__logo">
						<img src={logo} alt="FVE STAVBY Logo" />
						<span>FVE STAVBY</span>
					</NavLink>
					<a href="tel:+420777957290" className="header-top__number">
						+420 777 957 290
					</a>
					<LngSelect />
					<BurgerBtn />
				</div>
				<div className="header-bottom">
					<NavLink
						to={"/"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("home_title")}
					</NavLink>
					<NavLink
						to={"/about-us"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("about_us_title")}
					</NavLink>
					<NavLink
						to={"/house"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("house_title")}
					</NavLink>
					<NavLink
						to={"/company"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("company_title")}
					</NavLink>
					<div className="header-bottom-dd">
						<NavLink
							to={"/components"}
							className={({ isActive }) =>
								isActive
									? activeHeaderLink + " products"
									: inactiveHeaderLink + " products"
							}
						>
							{t("components_title")}
						</NavLink>
					</div>
					<NavLink
						to={"/our-installation"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("our_installation_title")}
					</NavLink>
					<NavLink
						to={"/contacts"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("contacts_title")}
					</NavLink>
				</div>
			</header>
			<div className="header-card">
				<HashLink className={"header-card__link"} to={"/components#invertors"}>
					Střídače (Deye, Solax Power, Chisage ESS)
				</HashLink>
				<HashLink className={"header-card__link"} to={"/components#connectors"}>
					Bateriová uložiště (Deye, Solax, Chisage ESS)
				</HashLink>
				<HashLink className={"header-card__link"} to={"/components#panels"}>
					Panely (Jinko, Aiko)
				</HashLink>
				<HashLink className={"header-card__link"} to={"/components#optimizers"}>
					Optimizéry (Tigo)
				</HashLink>
			</div>
		</>
	);
};

export default Header;
