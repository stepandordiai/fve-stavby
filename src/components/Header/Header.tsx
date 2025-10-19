import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import LngSelect from "../LngSelect/LngSelect";
import { useEffect, useState } from "react";
import logo from "/logo/solar-panel.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const { pathname, hash } = useLocation();

	const [isMenuActive, setIsMenuActive] = useState(false);

	useEffect(() => {
		const elements = [
			".header-top__logo",
			".header-top__number",
			".header-bottom",
			".lng-select",
			".lng-select__btn",
			".burger-btn",
			".menu",
		];

		const revealHeader = (withDelay: boolean) => {
			elements.forEach((selector) => {
				const el = document.querySelector<HTMLElement>(selector);

				if (el) {
					// TODO:
					// Clear previous animation if any
					el.style.animation = "none";
					el.offsetHeight; // Force reflow to reset animation

					el.style.animation = withDelay
						? `revealHeader 1s 2s forwards` // staggered delay
						: `revealHeader 0s 0s forwards`;
				}
			});
		};

		if (pathname === "/" && !hash) {
			revealHeader(true); // delayed animation on home page
		} else {
			revealHeader(false); // instant animation or no delay
		}
	}, [pathname, hash]);

	// TODO: FIX
	useEffect(() => {
		const headerBottom = document.querySelector(".header-bottom");
		const headerInner = document.querySelector(".header-inner");

		let initScroll = 0;

		window.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > initScroll && initScroll > window.innerHeight / 2) {
				headerBottom?.classList.add("header-bottom--hide");
				headerInner?.classList.add("header-inner--hide");
			} else {
				headerBottom?.classList.remove("header-bottom--hide");
				headerInner?.classList.remove("header-inner--hide");
			}
			initScroll = scrollTop;
		});
	}, []);

	function toggleBurgerBtn(): void {
		setIsMenuActive((prev) => !prev);
	}

	useEffect(() => {
		setIsMenuActive(false);
	}, [pathname]);

	// TODO:
	useEffect(() => {
		const closeMenuOnEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenuActive(false);
			}
		};

		document.addEventListener("keydown", closeMenuOnEsc);

		return () => {
			document.removeEventListener("keydown", closeMenuOnEsc);
		};
	}, []);

	return (
		<>
			<header className="header">
				<div className="header-inner">
					<div className="header-top">
						<NavLink
							onClick={() => setIsMenuActive(false)}
							to="/"
							className="header-top__logo"
						>
							<img src={logo} alt="FVE STAVBY logo" />
							<span className="header-top__logo-txt">FVE STAVBY</span>
						</NavLink>
						<a href="tel:+420728803703" className="header-top__number">
							+420 728 803 703
						</a>
						<LngSelect />
						<div onClick={toggleBurgerBtn} className="burger-btn-wrapper">
							<div
								className={`burger-btn ${
									isMenuActive ? "burger-btn--active" : ""
								}`}
							>
								<span
									className={`burger-btn__center-line ${
										isMenuActive ? "burger-btn__center-line--active" : ""
									}`}
								></span>
							</div>
						</div>
					</div>
					<div className="header-bottom-wrapper">
						<nav className="header-bottom">
							<NavLink
								to="/"
								className={({ isActive }) =>
									`header__nav-link ${
										isActive ? "header__nav-link--active" : ""
									}`
								}
							>
								{t("home_title")}
							</NavLink>
							<NavLink
								to="/about-us"
								className={({ isActive }) =>
									`header__nav-link ${
										isActive ? "header__nav-link--active" : ""
									}`
								}
							>
								{t("about_us_title")}
							</NavLink>
							<NavLink
								to="/photovoltaics-for-single-family-homes"
								className={({ isActive }) =>
									`header__nav-link ${
										isActive ? "header__nav-link--active" : ""
									}`
								}
							>
								{t("photovoltaics_for_single_family_homes_title")}
							</NavLink>
							<NavLink
								to="/photovoltaics-for-companies"
								className={({ isActive }) =>
									`header__nav-link ${
										isActive ? "header__nav-link--active" : ""
									}`
								}
							>
								{t("photovoltaics_for_companies_title")}
							</NavLink>
							<NavLink
								to="/svj"
								className={({ isActive }) =>
									`header__nav-link ${
										isActive ? "header__nav-link--active" : ""
									}`
								}
							>
								<span>SVJ</span>
								<span className="header__nav-link--new">New</span>
							</NavLink>
							<NavLink
								to="/our-installation"
								className={({ isActive }) =>
									`header__nav-link ${
										isActive ? "header__nav-link--active" : ""
									}`
								}
							>
								{t("our_installation_title")}
							</NavLink>
							<NavLink
								to="/contacts"
								className={({ isActive }) =>
									`header__nav-link ${
										isActive ? "header__nav-link--active" : ""
									}`
								}
							>
								{t("contacts_title")}
							</NavLink>
						</nav>
					</div>
				</div>
			</header>

			{/* menu */}

			<div className={`menu ${isMenuActive ? "menu--active" : ""}`}>
				<div
					className={`menu-wrapper ${
						isMenuActive ? "menu-wrapper--active" : ""
					}`}
				>
					<nav className="menu__nav">
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
							}
							to="/"
						>
							{t("home_title")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
							}
							to="/about-us"
						>
							{t("about_us_title")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
							}
							to="/photovoltaics-for-single-family-homes"
						>
							{t("photovoltaics_for_single_family_homes_title")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
							}
							to="/photovoltaics-for-companies"
						>
							{t("photovoltaics_for_companies_title")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
							}
							to="/svj"
						>
							<span>SVJ</span>
							<span className="menu__nav-link--new">New</span>
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
							}
							to="/our-installation"
						>
							{t("our_installation_title")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
							}
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
		</>
	);
};

export default Header;
