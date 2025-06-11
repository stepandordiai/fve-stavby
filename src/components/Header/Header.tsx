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

	const inactiveHeaderLink = "header__link";
	const activeHeaderLink = "header__link header__link--active bg--acent";

	useEffect(() => {
		const headerCard = document.querySelector(
			".header-card"
		) as HTMLDivElement | null;
		const headerBottomDd = document.querySelector(
			".header-bottom-dd"
		) as HTMLDivElement | null;

		// FIXME:
		const headerDd = document.querySelector(".products");
		const headerCardLinks = document.querySelectorAll(".header-card__link");

		const handleHeaderBottom = (e: MouseEvent | TouchEvent): void => {
			if (
				e.target == headerCard ||
				e.target == headerDd ||
				e.target == headerCardLinks[0] ||
				e.target == headerCardLinks[1] ||
				e.target == headerCardLinks[2] ||
				e.target == headerCardLinks[3] ||
				e.target == headerBottomDd
			) {
				headerCard?.classList.add("header-card--active");
			} else {
				headerCard?.classList.remove("header-card--active");
			}
		};

		document.addEventListener("mouseover", handleHeaderBottom);

		document.addEventListener("touchstart", handleHeaderBottom);

		headerCardLinks.forEach((link) => {
			link.addEventListener("click", () => {
				headerCard?.classList.remove("header-card--active");
			});
		});

		return () => {
			document.removeEventListener("mouseover", handleHeaderBottom);

			document.removeEventListener("touchstart", handleHeaderBottom);

			headerCardLinks.forEach((link) => {
				link.removeEventListener("click", () => {
					headerCard?.classList.remove("header-card--active");
				});
			});
		};
	}, []);

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
						to={"/family-houses"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("family_houses_title")}
					</NavLink>
					<NavLink
						to={"/commercial-installation"}
						className={({ isActive }) =>
							isActive ? activeHeaderLink : inactiveHeaderLink
						}
					>
						{t("commercial_installation_title")}
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
					{t("components.section1")} (Deye, Solax Power, Chisage ESS)
				</HashLink>
				<HashLink className={"header-card__link"} to={"/components#connectors"}>
					{t("components.section2")} (Deye, Solax, Chisage ESS)
				</HashLink>
				<HashLink className={"header-card__link"} to={"/components#panels"}>
					{t("components.section3")} (Jinko, Aiko)
				</HashLink>
				<HashLink className={"header-card__link"} to={"/components#optimizers"}>
					{t("components.section4")} (Tigo)
				</HashLink>
			</div>
		</>
	);
};

export default Header;
