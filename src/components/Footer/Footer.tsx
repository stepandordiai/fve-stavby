import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import navLinksData from "./../../data/nav-links-data.json";
import handleCopy from "../../utils/handleCopy";
import contactsData from "./../../data/contacts-data.json";
import classNames from "classnames";
import InstagramIcon from "../../Icons/InstagramIcon";
import FacebookIcon from "../../Icons/FacebookIcon";
import TiktokIcon from "../../Icons/TiktokIcon";
import footerBottomLogo from "/fve-stavby-footer-logo.svg";
import logo from "/logo/fve-stavby-logo.svg";
import "./Footer.scss";

const socialsData = [
	{
		title: "Instagram",
		url: "https://www.instagram.com/fvestavby",
		icon: InstagramIcon,
	},
	{
		title: "Facebook",
		url: "https://www.facebook.com/profile.php?id=61576683235805",
		icon: FacebookIcon,
	},
	{
		title: "TikTok",
		url: "https://www.tiktok.com/@fvestavby",
		icon: TiktokIcon,
	},
];

const Footer = () => {
	const { t } = useTranslation();

	// FIXME:
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
		<footer className="footer">
			<div className="footer-inner">
				<div className="footer-divider"></div>
				<div className="footer-top">
					<div>
						<NavLink className="footer-top__logo" to="/">
							<img src={logo} alt="FVE STAVBY logo" />
							<span>FVE STAVBY</span>
						</NavLink>
						<p>{t("logo_title")}</p>
					</div>
					<div>
						<p className="footer__socials-title">{t("followUs")}</p>
						<div className="footer__socials-list">
							{socialsData.map((social, i) => {
								const Icon = social.icon;
								return (
									<a
										key={i}
										href={social.url}
										title={social.title}
										target="_blank"
									>
										<Icon />
									</a>
								);
							})}
						</div>
					</div>
					<div className="footer-top__nav">
						<p>{t("navigation")}</p>
						<nav className="footer-top__nav-list">
							{navLinksData.map((link) => {
								return (
									<NavLink
										key={link.id}
										to={link.path}
										className={({ isActive }) =>
											classNames("footer__nav-link", {
												"footer__nav-link--active": isActive,
											})
										}
									>
										{t(link.name)}
									</NavLink>
								);
							})}
							<NavLink
								to="/manuals"
								className={({ isActive }) =>
									classNames("footer__nav-link", {
										"footer__nav-link--active": isActive,
									})
								}
							>
								{t("manuals_title")}
							</NavLink>
						</nav>
					</div>
					<ul className="footer-top__contact-details">
						<li>
							<span>{t("tel")}</span>
							<a
								className="footer__link"
								href={`tel:${contactsData.tel.replaceAll(" ", "")}`}
							>
								{contactsData.tel}
							</a>
						</li>
						<li>
							<span>E-mail</span>
							<a className="footer__link" href={`mailto:${contactsData.email}`}>
								{contactsData.email}
							</a>
						</li>
						<li>
							<span>{t("contacts.address_office")}</span>
							<a
								className="footer__link"
								href={contactsData.officeAddressUrl}
								target="_blank"
							>
								{contactsData.officeAddress}
							</a>
						</li>
						<li>
							<span>{t("contacts.address_company")}</span>
							<a
								className="footer__link"
								href={contactsData.companyAddressUrl}
								target="_blank"
							>
								{contactsData.companyAddress}
							</a>
						</li>
						<li>
							<span>Identifikační číslo</span>
							<button
								className="footer__copy-btn"
								onClick={(e) => handleCopy(e, ".footer__copy-btn", t("copied"))}
								title={t("copy")}
							>
								{contactsData.companyNumber}
							</button>
						</li>
					</ul>
				</div>
				<div className="footer-bottom">
					<p>
						&copy; 2025&ndash;{new Date().getFullYear()} FVE - stavby s.r.o.
					</p>
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
					alt="FVE STAVBY logo"
				/>
			</div>
		</footer>
	);
};

export default Footer;
