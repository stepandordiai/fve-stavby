"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import navLinksData from "@/data/nav-links.json";
import LngSelect from "@/components/LngSelect/LngSelect";
import contacts from "@/data/contacts.json";
import classNames from "classnames";
import "./Header.scss";

const Header = () => {
	const t = useTranslations();
	const pathname = usePathname();

	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
	const [headerBottomHidden, setHeaderBottomHidden] = useState<boolean>(false);
	const [headerInnerHidden, setHeaderInnerHidden] = useState<boolean>(false);

	const [hash, setHash] = useState("");

	useEffect(() => {
		setHash(window.location.hash);

		const handleHashChange = () => {
			setHash(window.location.hash);
		};

		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

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
					// Clear previous animation if any
					el.style.animation = "none";
					el.offsetHeight; // Force reflow to reset animation

					el.style.animation = withDelay
						? `revealHeader 1s 2s forwards` // staggered delay
						: `revealHeader 0s 0s forwards`;
				}
			});
		};

		revealHeader(pathname === "/" && !hash);
	}, [pathname, hash]);

	// FIXME:
	useEffect(() => {
		let prevScrollTop = 0;
		const handleHeaderBottomHiddenOnScroll = () => {
			const scrollTop = window.scrollY;

			setHeaderInnerHidden(
				scrollTop > prevScrollTop && prevScrollTop > window.innerHeight / 2,
			);
			setHeaderBottomHidden(
				scrollTop > prevScrollTop && prevScrollTop > window.innerHeight / 2,
			);

			prevScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleHeaderBottomHiddenOnScroll);

		return () =>
			window.removeEventListener("scroll", handleHeaderBottomHiddenOnScroll);
	}, []);

	const toggleMenu = (): void => setIsMenuVisible((prev) => !prev);

	useEffect(() => {
		setIsMenuVisible(false);
	}, [pathname]);

	// Close menu on Esc
	useEffect(() => {
		const closeMenuOnEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenuVisible(false);
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
						"header-inner--hidden": headerInnerHidden,
					})}
				>
					<div className="header-top">
						<Link
							onClick={() => setIsMenuVisible(false)}
							href="/"
							className="header-top__logo"
						>
							<img src="/logo/fve-stavby-logo.svg" alt="FVE STAVBY logo" />
							<span>FVE STAVBY</span>
						</Link>
						<a
							href={`tel:${contacts.tel.replaceAll(" ", "")}`}
							className="header-top__number"
						>
							{contacts.tel}
						</a>
						<LngSelect />
						{/* menu-btn */}
						<button
							onClick={toggleMenu}
							className="burger-btn-wrapper"
							aria-label={
								isMenuVisible ? t("header.closeMenu") : t("header.openMenu")
							}
							aria-expanded={isMenuVisible}
							aria-controls="menu"
						>
							<span
								className={classNames("burger-btn", {
									"burger-btn--active": isMenuVisible,
								})}
							>
								<span
									className={classNames("burger-btn__center-line", {
										"burger-btn__center-line--active": isMenuVisible,
									})}
								></span>
							</span>
						</button>
					</div>
					<div className="header-bottom-wrapper">
						<nav
							className={classNames("header-bottom", {
								"header-bottom--hidden": headerBottomHidden,
							})}
						>
							{navLinksData.map((link) => {
								return (
									<Link
										key={link.id}
										href={link.path}
										className={classNames("header__nav-link", {
											"header__nav-link--active": link.path === pathname,
										})}
									>
										{t(link.name)}
									</Link>
								);
							})}
						</nav>
					</div>
				</div>
			</header>
			{/* menu */}
			<nav
				className={classNames("menu", {
					"menu--active": isMenuVisible,
				})}
				id="menu"
				hidden={!isMenuVisible}
			>
				<div
					className={classNames("menu-wrapper", {
						"menu-wrapper--active": isMenuVisible,
					})}
				>
					<div className="menu__nav">
						{navLinksData.map((link) => {
							return (
								<Link
									key={link.id}
									onClick={() => setIsMenuVisible(false)}
									className={classNames("menu__nav-link", {
										"menu__nav-link--active": link.path === pathname,
									})}
									href={link.path}
								>
									{t(link.name)}
								</Link>
							);
						})}
					</div>
					<ul className="menu__contacts-details">
						<li>
							<p>{t("tel")}</p>
							<a
								className="menu-link"
								href={`tel:${contacts.tel.replaceAll(" ", "")}`}
							>
								{contacts.tel}
							</a>
						</li>
						<li>
							<p>E-mail</p>
							<a className="menu-link" href={`mailto:${contacts.email}`}>
								{contacts.email}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
