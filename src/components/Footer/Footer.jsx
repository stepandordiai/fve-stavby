import { NavLink } from "react-router-dom";
import logo from "/assets/logo/solar-panel.png";
import footerBottomLogo from "/assets/fve-stavby-footer-logo.svg";
import { useEffect } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import "./../../global/LinkEffect.scss";
import "./Footer.scss";

const Footer = () => {
	const inactiveFooterLink = "footer__link";
	const activeFooterLink = "footer__link footer__link--active";

	// TODO: I learned new nice animation with position and scale
	useEffect(() => {
		const creatorLink = document.querySelector(".creator-link");
		const bgElement = document.querySelector(".bg-element");

		let mouseX;
		let mouseY;

		creatorLink.addEventListener("mouseenter", (e) => {
			const rect = creatorLink.getBoundingClientRect();
			mouseX =
				(!isTouchDevice() ? e.clientX : e.touches[0].clientX) - rect.left;
			mouseY = (!isTouchDevice() ? e.clientY : e.touches[0].clientY) - rect.top;
			bgElement.style.top = mouseY + "px";
			bgElement.style.left = mouseX + "px";
			bgElement.classList.add("bg-element--active");
		});

		creatorLink.addEventListener("touchstart", (e) => {
			const rect = creatorLink.getBoundingClientRect();
			mouseX =
				(!isTouchDevice() ? e.clientX : e.touches[0].clientX) - rect.left;
			mouseY = (!isTouchDevice() ? e.clientY : e.touches[0].clientY) - rect.top;
			bgElement.style.top = mouseY + "px";
			bgElement.style.left = mouseX + "px";
			bgElement.classList.add("bg-element--active");
		});

		creatorLink.addEventListener("mouseleave", () => {
			const bgElement = document.querySelector(".bg-element");
			bgElement.classList.remove("bg-element--active");
		});

		creatorLink.addEventListener("touchend", () => {
			const bgElement = document.querySelector(".bg-element");
			bgElement.classList.remove("bg-element--active");
		});
	}, []);

	return (
		<>
			<div className="footer-divider"></div>
			<footer className="footer">
				<div className="footer-top">
					<div>
						<NavLink className={"footer-top__logo"} to={"/"}>
							<img src={logo} alt="Logo" />
							<span>FVE STAVBY</span>
						</NavLink>
						<p>Fotovoltaika, která dává smysl</p>
					</div>
					<div className="footer-top__nav">
						<p>Navigace</p>
						<ul className="footer-top__nav-list">
							<li>
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									Úvod
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/about-us"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									O nás
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/house"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									Dům
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/company"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									Firemní instalace
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/components"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									Komponenty
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/our-installation"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									Naše instalace
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/contacts"}
									className={({ isActive }) =>
										isActive ? activeFooterLink : inactiveFooterLink
									}
								>
									Kontakty
								</NavLink>
							</li>
						</ul>
					</div>
					<ul className="footer-top__contact-details">
						<li>
							<span>Telefonní číslo</span>
							<a className="footer__link" href="tel:+420728803703">
								+420 728 803 703
							</a>
						</li>
						<li>
							<span>E-mail</span>
							<a className="footer__link" href="mailto:info@fvestavby.cz">
								info@fvestavby.com
							</a>
						</li>
						<li>
							<span>Adresa kanceláře</span>
							<a
								className="footer__link"
								href="https://maps.app.goo.gl/B8QvEwaqziXBAe776"
							>
								Pod Hroby 271 Kolín IV
							</a>
						</li>
						<li>
							<span>Adresa společnosti</span>
							<a
								className="footer__link"
								href="https://maps.app.goo.gl/EsrX5bSfKpw8GprZ9"
							>
								Lidická 700/19 Brno
							</a>
						</li>
						<li>
							<span>IČO</span>
							<p>17066387</p>
						</li>
					</ul>
				</div>
				<div className="footer-bottom">
					<p>&copy; 2025 FVE STAVBY. Všechna práva vyhrazena.</p>
					<div className="creator">
						<span>Site by</span>
						<a
							className="creator-link"
							href="https://heeeyooo.studio/"
							target="_blank"
						>
							heeeyooo.studio
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
