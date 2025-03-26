import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo/fve-stavby-black.png";
import footerBottomLogo from "./../../assets/fve-stavby-footer-logo.png";
import "./../../global/LinkEffect.scss";
import "./Footer.scss";

const Footer = () => {
    const inactiveFooterLink = "footer__link";
    const activeFooterLink = "footer__link footer__link--active";

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
                                        isActive
                                            ? activeFooterLink
                                            : inactiveFooterLink
                                    }
                                >
                                    Úvod
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/about-us"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeFooterLink
                                            : inactiveFooterLink
                                    }
                                >
                                    O nás
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/house"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeFooterLink
                                            : inactiveFooterLink
                                    }
                                >
                                    Dům
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/company"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeFooterLink
                                            : inactiveFooterLink
                                    }
                                >
                                    Firemní instalace
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/contacts"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeFooterLink
                                            : inactiveFooterLink
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
                            <a
                                className="footer__link"
                                href="tel:+420728803703"
                            >
                                +420 728 803 703
                            </a>
                        </li>
                        <li>
                            <span>E-mail</span>
                            <a
                                className="footer__link"
                                href="mailto:obchod@fvestavby.com"
                            >
                                obchod@fvestavby.com
                            </a>
                        </li>
                        <li>
                            <span>Adresa</span>
                            <a
                                className="footer__link"
                                href="mailto:obchod@fvestavby.com"
                            >
                                Pod Hroby 271 Kolín IV
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 FVE STAVBY. Všechna práva vyhrazena.</p>
                    <div className="creator">
                        <span>Site by</span>
                        <a
                            className="creator-link footer__link"
                            href="https://heeeyooo-studio.netlify.app/"
                            target="_blank"
                        >
                            heeeyooo.studio
                        </a>
                    </div>
                </div>
            </footer>
            {/* <p className="footer-bottom__logo">FVE STAVBY</p> */}
            <img
                className="footer-bottom__logo-img"
                src={footerBottomLogo}
                alt="Logo"
            />
        </>
    );
};

export default Footer;
