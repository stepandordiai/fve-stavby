import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import handleCopy from "../../utils/handleCopy";
import footerBottomLogo from "/fve-stavby-footer-logo.svg";
import logo from "/logo/solar-panel.png";
import instagramIcon from "/icons/instagram.png";
import facebookIcon from "/icons/facebook.png";
import tiktokIcon from "/icons/tiktok.png";
import "./Footer.scss";

const Footer = () => {
	const { t } = useTranslation();

	const inactiveFooterLink = "footer__nav-link";
	const activeFooterLink = "footer__nav-link footer__nav-link--active";

	// TODO: I learned new nice animation with position and scale
	useEffect(() => {
		const creatorLink = document.querySelector(
			".creator-link"
		) as HTMLAnchorElement | null;
		const bgElement = document.querySelector(
			".bg-element"
		) as HTMLDivElement | null;

		const handleLinkAnimation = (e: MouseEvent | TouchEvent) => {
			if (!creatorLink || !bgElement) return;
			const rect = creatorLink.getBoundingClientRect();
			let positionX =
				(!isTouchDevice()
					? (e as MouseEvent).clientX
					: (e as TouchEvent).touches[0].clientX) - rect.left;
			let positionY =
				(!isTouchDevice()
					? (e as MouseEvent).clientY
					: (e as TouchEvent).touches[0].clientY) - rect.top;
			bgElement.style.top = positionY + "px";
			bgElement.style.left = positionX + "px";
			bgElement.classList.add("bg-element--active");
		};

		creatorLink?.addEventListener("mousemove", handleLinkAnimation);

		creatorLink?.addEventListener("touchstart", handleLinkAnimation);

		creatorLink?.addEventListener("mouseleave", () => {
			bgElement?.classList.remove("bg-element--active");
		});

		creatorLink?.addEventListener("touchend", () => {
			bgElement?.classList.remove("bg-element--active");
		});

		return () => {
			creatorLink?.removeEventListener("mousemove", handleLinkAnimation);

			creatorLink?.removeEventListener("touchstart", handleLinkAnimation);

			creatorLink?.removeEventListener("mouseleave", () => {
				bgElement?.classList.remove("bg-element--active");
			});

			creatorLink?.removeEventListener("touchend", () => {
				bgElement?.classList.remove("bg-element--active");
			});
		};
	}, []);

	return (
		<>
			<footer className="footer">
				<div className="footer-inner">
					<div className="footer-divider"></div>
					<div className="footer-top">
						<div>
							<NavLink className={"footer-top__logo"} to={"/"}>
								<img src={logo} alt="FVE STAVBY Logo" />
								<span>FVE STAVBY</span>
							</NavLink>
							<p>{t("logo_title")}</p>
						</div>
						<div>
							<p className="footer__socials-title">Sledujte nás</p>
							<div className="footer__socials-list">
								<a href="https://www.instagram.com/fvestavby" title="Instagram">
									<img
										width={25}
										height={25}
										src={instagramIcon}
										alt="Instagram FVE STAVBY Logo"
									/>
								</a>
								<a
									href="https://www.facebook.com/profile.php?id=61576683235805"
									title="Facebook"
									target="_blank"
								>
									<img
										width={25}
										height={25}
										src={facebookIcon}
										alt="Facebook FVE STAVBY Logo"
									/>
								</a>
								<a href="https://www.tiktok.com/@fvestavby" title="TikTok">
									<img
										width={25}
										height={25}
										src={tiktokIcon}
										alt="TikTok FVE STAVBY Logo"
									/>
								</a>
							</div>
						</div>
						<div className="footer-top__nav">
							<p>{t("navigation")}</p>
							<nav className="footer-top__nav-list">
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									{t("home_title")}
								</NavLink>
								<NavLink
									to={"/about-us"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									{t("about_us_title")}
								</NavLink>
								<NavLink
									to={"/photovoltaics-for-single-family-homes"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									{t("photovoltaics_for_single_family_homes_title")}
								</NavLink>
								<NavLink
									to={"/photovoltaics-for-companies"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									{t("photovoltaics_for_companies_title")}
								</NavLink>
								<NavLink
									to={"/svj"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									<span>SVJ</span>
									<span className="footer__nav-link--new">New</span>
								</NavLink>
								<NavLink
									to={"/our-installation"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									{t("our_installation_title")}
								</NavLink>
								<NavLink
									to={"/contacts"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									{t("contacts_title")}
								</NavLink>
								<NavLink
									to={"/manuals"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									{t("manuals_title")}
								</NavLink>
							</nav>
						</div>
						<ul className="footer-top__contact-details">
							<li>
								<span>{t("tel")}</span>
								<a className="footer__link" href="tel:+420728803703">
									+420 728 803 703
								</a>
							</li>
							<li>
								<span>E-mail</span>
								<a className="footer__link" href="mailto:info@fvestavby.cz">
									info@fvestavby.cz
								</a>
							</li>
							<li>
								<span>{t("contacts.address_office")}</span>
								<a
									className="footer__link"
									href="https://maps.app.goo.gl/UBXCPbrrCNxUSXNY8"
									target="_blank"
								>
									Pod Hroby 271 Kolín IV
								</a>
							</li>
							<li>
								<span>{t("contacts.address_company")}</span>
								<a
									className="footer__link"
									href="https://maps.app.goo.gl/56b3G1KEn5RwGfdW7"
									target="_blank"
								>
									Krocínova 333/3, Staré Město, 110 00 Praha 1
								</a>
							</li>
							<li>
								<span>Identifikační číslo</span>
								<button
									className="footer__copy-btn"
									onClick={(e) =>
										handleCopy(e, ".footer__copy-btn", t("copied"))
									}
									title={t("copy")}
								>
									23287179
								</button>
							</li>
						</ul>
					</div>
					<div className="footer-bottom">
						<p>&copy; 2025 FVE - stavby s.r.o.</p>
						<p>{t("all_rights_reserved")}.</p>
						<div className="creator">
							<span>Website created by</span>
							<a
								className="creator-link"
								href="https://www.heeeyooo.studio/"
								target="_blank"
							>
								heeeyooo studio
								<div className="bg-element"></div>
							</a>
						</div>
					</div>
					<img
						className="footer-bottom__logo-img"
						src={footerBottomLogo}
						alt="FVE STAVBY Logo"
					/>
				</div>
			</footer>
		</>
	);
};

export default Footer;
