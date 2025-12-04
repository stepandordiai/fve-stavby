import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import navLinksData from "./../../data/nav-links-data.json";
import LngSelect from "../LngSelect/LngSelect";
import contactsData from "./../../data/contacts-data.json";
import classNames from "classnames";
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
			if (e.code === "Escape") {
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
					className={classNames("header-inner", {
						"header-inner--hide": !headerInner,
					})}
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
						<a
							href={`tel:${contactsData.tel.replaceAll(" ", "")}`}
							className="header-top__number"
						>
							{contactsData.tel}
						</a>
						<LngSelect />
						{/* menu-btn */}
						<button
							onClick={toggleBurgerBtn}
							className="burger-btn-wrapper"
							aria-label={
								isMenuActive ? t("header.closeMenu") : t("header.openMenu")
							}
						>
							<span
								className={classNames("burger-btn", {
									"burger-btn--active": isMenuActive,
								})}
							>
								<span
									className={classNames("burger-btn__center-line", {
										"burger-btn__center-line--active": isMenuActive,
									})}
								></span>
							</span>
						</button>
					</div>
					<div className="header-bottom-wrapper">
						<nav
							className={classNames("header-bottom", {
								"header-bottom--hide": headerBottom,
							})}
						>
							{navLinksData.map((link) => {
								return (
									<NavLink
										key={link.id}
										to={link.path}
										className={({ isActive }) =>
											classNames("header__nav-link", {
												"header__nav-link--active": isActive,
											})
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

			<div
				className={classNames("menu", {
					"menu--active": isMenuActive,
				})}
			>
				<div
					className={classNames("menu-wrapper", {
						"menu-wrapper--active": isMenuActive,
					})}
				>
					<nav className="menu__nav">
						{navLinksData.map((link) => {
							return (
								<NavLink
									key={link.id}
									onClick={() => setIsMenuActive(false)}
									className={({ isActive }) =>
										classNames("menu__nav-link", {
											"menu__nav-link--active": isActive,
										})
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
							<a
								className="menu-link"
								href={`tel:${contactsData.tel.replaceAll(" ", "")}`}
							>
								{contactsData.tel}
							</a>
						</li>
						<li>
							<p>E-mail</p>
							<a className="menu-link" href={`mailto:${contactsData.email}`}>
								{contactsData.email}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
