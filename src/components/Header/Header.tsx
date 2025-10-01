import { useTranslation } from "react-i18next";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink, useLocation } from "react-router-dom";
import LngSelect from "../LngSelect/LngSelect";
import { useEffect } from "react";
import logo from "/logo/solar-panel.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const { pathname, hash } = useLocation();

	const inactiveHeaderLink = "header__nav-link";
	const activeHeaderLink =
		"header__nav-link header__nav-link--active bg--acent";

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

		// const headerCard = document.querySelector(
		// 	".header-card"
		// ) as HTMLDivElement | null;
		// const headerBottomDd = document.querySelector(
		// 	".header-bottom-dd"
		// ) as HTMLDivElement | null;

		// // FIXME:
		// const headerDd = document.querySelector(".products");
		// const headerCardLinks = document.querySelectorAll(".header-card__link");

		// const handleHeaderBottom = (e: MouseEvent | TouchEvent): void => {
		// 	if (
		// 		e.target == headerCard ||
		// 		e.target == headerDd ||
		// 		e.target == headerCardLinks[0] ||
		// 		e.target == headerCardLinks[1] ||
		// 		e.target == headerCardLinks[2] ||
		// 		e.target == headerCardLinks[3] ||
		// 		e.target == headerBottomDd
		// 	) {
		// 		headerCard?.classList.add("header-card--active");
		// 	} else {
		// 		headerCard?.classList.remove("header-card--active");
		// 	}
		// };

		// document.addEventListener("mouseover", handleHeaderBottom);

		// document.addEventListener("touchstart", handleHeaderBottom);

		// headerCardLinks.forEach((link) => {
		// 	link.addEventListener("click", () => {
		// 		headerCard?.classList.remove("header-card--active");
		// 	});
		// });

		// return () => {
		// 	document.removeEventListener("mouseover", handleHeaderBottom);

		// 	document.removeEventListener("touchstart", handleHeaderBottom);

		// 	headerCardLinks.forEach((link) => {
		// 		link.removeEventListener("click", () => {
		// 			headerCard?.classList.remove("header-card--active");
		// 		});
		// 	});
		// };
	}, []);

	return (
		<>
			<header className="header">
				<div className="header-inner">
					<div className="header-top">
						<NavLink to="/" className="header-top__logo">
							<img src={logo} alt="FVE STAVBY Logo" />
							<span className="header-top__logo-txt">FVE STAVBY</span>
						</NavLink>
						<a href="tel:+420728803703" className="header-top__number">
							+420 728 803 703
						</a>
						<LngSelect />
						<BurgerBtn />
					</div>
					<div className="header-bottom-wrapper">
						<nav className="header-bottom">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeHeaderLink : inactiveHeaderLink
								}
							>
								{t("home_title")}
							</NavLink>
							<NavLink
								to="/about-us"
								className={({ isActive }) =>
									isActive ? activeHeaderLink : inactiveHeaderLink
								}
							>
								{t("about_us_title")}
							</NavLink>
							<NavLink
								to="/photovoltaics-for-single-family-homes"
								className={({ isActive }) =>
									isActive ? activeHeaderLink : inactiveHeaderLink
								}
							>
								{t("photovoltaics_for_single_family_homes_title")}
							</NavLink>
							<NavLink
								to="/photovoltaics-for-companies"
								className={({ isActive }) =>
									isActive ? activeHeaderLink : inactiveHeaderLink
								}
							>
								{t("photovoltaics_for_companies_title")}
							</NavLink>
							<NavLink
								to="/svj"
								className={({ isActive }) =>
									isActive ? activeHeaderLink : inactiveHeaderLink
								}
							>
								<span>SVJ</span>
								<span className="header__nav-link--new">New</span>
							</NavLink>
							<NavLink
								to="/our-installation"
								className={({ isActive }) =>
									isActive ? activeHeaderLink : inactiveHeaderLink
								}
							>
								{t("our_installation_title")}
							</NavLink>
							<NavLink
								to="/contacts"
								className={({ isActive }) =>
									isActive ? activeHeaderLink : inactiveHeaderLink
								}
							>
								{t("contacts_title")}
							</NavLink>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
