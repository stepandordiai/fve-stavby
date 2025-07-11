import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Menu.scss";

const Menu = () => {
	const { t } = useTranslation();

	const handleLinkClick = (): void => {
		const elements = [
			".burger-btn",
			".burger-btn__center-line",
			".menu",
			".menu-wrapper",
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

	const inactiveLink = "menu__nav-link js-link";
	const activeLink = "menu__nav-link menu__nav-link--active js-link";

	return (
		<div className="menu">
			<div className="menu-wrapper">
				<nav className="menu__nav">
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
						to="/commercial-installation"
					>
						{t("commercial_installation_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/svj"
					>
						<span>SVJ</span>
						<span className="menu__nav-link--new">New</span>
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
						<a className="menu-link" href="tel:+420728803703">
							+420 728 803 703
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
