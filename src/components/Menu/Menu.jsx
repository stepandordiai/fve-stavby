import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./../../global/LinkEffect.scss";
import "./Menu.scss";

const Menu = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.querySelectorAll(".js-link").forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelector(".burger-btn")
					.classList.remove("burger-btn--active");
				document
					.querySelector(".burger-btn__center-line")
					.classList.remove("burger-btn__center-line--active");

				document.querySelector(".menu").classList.remove("menu--active");
				document
					.querySelector(".menu-wrapper")
					.classList.remove("menu-wrapper--active");
				document
					.querySelector(".header-bottom")
					.classList.remove("header-bottom--hide");
			});
		});
	});

	const inactiveLink = "link js-link link-effect";
	const activeLink = "link js-link link-effect link-effect--active";

	return (
		<section className="menu">
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
						to="/house"
					>
						{t("house_title")}
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
					{/* <li>
						<p>Adresa kanceláře</p>
						<a className="menu-link" href="mailto:info@fvestavby.cz">
							Pod Hroby 271 Kolín IV
						</a>
					</li>
					<li>
						<p>Adresa společnosti</p>
						<a className="menu-link" href="mailto:info@fvestavby.cz">
							Pod Hroby 271 Kolín IV
						</a>
					</li> */}
				</ul>
			</div>
		</section>
	);
};

export default Menu;
