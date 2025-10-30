import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import navLinksData from "./../../data/nav-links-data.json";
import LngSelect from "../LngSelect/LngSelect";
import logo from "/logo/solar-panel.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();
	const { pathname, hash } = useLocation();

	const [isMenuActive, setIsMenuActive] = useState(false);
	const [headerBottom, setHeaderBottom] = useState(true);
	const [headerInner, setHeaderInner] = useState(true);

	// FIXME:
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

	useEffect(() => {
		let prevScrollTop = 0;
		const handleHeaderBottomOnScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > prevScrollTop && prevScrollTop > window.innerHeight / 2) {
				setHeaderInner(false);
				setHeaderBottom(false);
			} else {
				setHeaderInner(true);
				setHeaderBottom(true);
			}
			prevScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleHeaderBottomOnScroll);

		return () =>
			window.removeEventListener("scroll", handleHeaderBottomOnScroll);
	}, []);

	function toggleBurgerBtn(): void {
		setIsMenuActive((prev) => !prev);
	}

	useEffect(() => {
		setIsMenuActive(false);
	}, [pathname]);

	// Close menu on Esc
	useEffect(() => {
		const closeMenuOnEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenuActive(false);
			}
		};

		document.addEventListener("keydown", closeMenuOnEsc);

		return () => document.removeEventListener("keydown", closeMenuOnEsc);
	}, []);

	return (
		<>
			<header className="header">
				<div
					className={`header-inner ${headerInner ? "" : "header-inner--hide"}`}
				>
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
						<nav
							className={`header-bottom ${
								headerBottom ? "" : "header-bottom--hide"
							}`}
						>
							{navLinksData.map((link) => {
								return (
									<NavLink
										key={link.id}
										to={link.path}
										className={({ isActive }) =>
											`header__nav-link ${
												isActive ? "header__nav-link--active" : ""
											}`
										}
									>
										{t(link.name)}
									</NavLink>
								);
							})}
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
						{navLinksData.map((link) => {
							return (
								<NavLink
									key={link.id}
									onClick={() => setIsMenuActive(false)}
									className={({ isActive }) =>
										`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
									}
									to={link.path}
								>
									{t(link.name)}
								</NavLink>
							);
						})}
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
