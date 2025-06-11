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

	const inactiveFooterLink = "footer__link";
	const activeFooterLink = "footer__link footer__link--active";

	// TODO: I learned new nice animation with position and scale
	useEffect(() => {
		const creatorLink = document.querySelector(
			".creator-link"
		) as HTMLAnchorElement | null;
		const bgElement = document.querySelector(
			".bg-element"
		) as HTMLDivElement | null;
		let positionX;
		let positionY;

		const handleLinkAnimation = (e: MouseEvent | TouchEvent) => {
			if (!creatorLink || !bgElement) return;
			const rect = creatorLink.getBoundingClientRect();
			positionX =
				(!isTouchDevice()
					? (e as MouseEvent).clientX
					: (e as TouchEvent).touches[0].clientX) - rect.left;
			positionY =
				(!isTouchDevice()
					? (e as MouseEvent).clientY
					: (e as TouchEvent).touches[0].clientY) - rect.top;
			bgElement.style.top = positionY + "px";
			bgElement.style.left = positionX + "px";
			bgElement.classList.add("bg-element--active");
		};

		creatorLink?.addEventListener("mouseenter", handleLinkAnimation);

		creatorLink?.addEventListener("touchstart", handleLinkAnimation);

		creatorLink?.addEventListener("mouseleave", () => {
			bgElement?.classList.remove("bg-element--active");
		});

		creatorLink?.addEventListener("touchend", () => {
			bgElement?.classList.remove("bg-element--active");
		});

		return () => {
			creatorLink?.removeEventListener("mouseenter", handleLinkAnimation);

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
							<a href="" title="Instagram">
								<img width={25} height={25} src={instagramIcon} alt="" />
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61576683235805"
								title="Facebook"
								target="_blank"
							>
								<img width={25} height={25} src={facebookIcon} alt="" />
							</a>
							<a href="" title="TikTok">
								<img width={25} height={25} src={tiktokIcon} alt="" />
							</a>
						</div>
					</div>
					<div className="footer-top__nav">
						<p>{t("navigation")}</p>
						<div className="footer-top__nav-list">
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
								to={"/family-houses"}
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
							>
								{t("family_houses_title")}
							</NavLink>
							<NavLink
								to={"/company"}
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
							>
								{t("company_title")}
							</NavLink>
							<NavLink
								to={"/components"}
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
							>
								{t("components_title")}
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
						</div>
					</div>
					<ul className="footer-top__contact-details">
						<li>
							<span>{t("tel")}</span>
							<a className="footer__link" href="tel:+420777957290">
								+420 777 957 290
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
								onClick={(e) => handleCopy(e, ".footer__copy-btn")}
							>
								23287179
							</button>
						</li>
					</ul>
				</div>
				<div className="footer-bottom">
					<p>&copy; 2025 FVE - stavby s.r.o. Všechna práva vyhrazena.</p>
					<div className="creator">
						<span>Site by</span>
						<a
							className="creator-link"
							href="https://heeeyooo.studio/"
							target="_blank"
						>
							heeeyooo studio
							<div className="bg-element"></div>
						</a>
					</div>
				</div>
			</footer>
			<img
				className="footer-bottom__logo-img"
				src={footerBottomLogo}
				alt="Logo"
			/>
		</>
	);
};

export default Footer;
