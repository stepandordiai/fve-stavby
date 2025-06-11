import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./../../global/LinkEffect.scss";
import "./Menu.scss";

const Menu = () => {
	const { t } = useTranslation();

	const handleLinkClick = (): void => {
		const elements = [
			".burger-btn",
			".burger-btn__center-line",
			".menu",
			".menu-wrapper",
			".header-bottom",
		].map(
			(selector) => document.querySelector(selector) as HTMLDivElement | null
		);

		elements.forEach((el) =>
			el?.classList.remove(`${el?.classList[0]}--active`)
		);
	};

	useEffect(() => {
		const links = document.querySelectorAll(".js-link");
		links.forEach((link) => {
			link.addEventListener("click", handleLinkClick);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener("click", handleLinkClick);
			});
		};
	}, []);

	const inactiveLink = "link js-link link-effect";
	const activeLink = "link js-link link-effect link-effect--active";

	return (
		<div className="menu">
			<div className="menu-wrapper">
				<nav className="nav">
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/"
					>
						{t("home_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/about-us"
					>
						{t("about_us_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/family-houses"
					>
						{t("family_houses_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/company"
					>
						{t("company_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/components"
					>
						{t("components_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/our-installation"
					>
						{t("our_installation_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/contacts"
					>
						{t("contacts_title")}
					</NavLink>
				</nav>
				<ul className="menu__contacts-details">
					<li>
						<p>{t("tel")}</p>
						<a className="menu-link" href="tel:+420777957290">
							+420 777 957 290
						</a>
					</li>
					<li>
						<p>E-mail</p>
						<a className="menu-link" href="mailto:info@fvestavby.cz">
							info@fvestavby.cz
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
