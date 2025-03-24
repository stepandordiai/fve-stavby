import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo/fve-stavby-black.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <div className="divider"></div>
            <footer className="footer">
                <div className="footer-top">
                    <div>
                        <NavLink className={"footer-top__logo"} to={"/"}>
                            <img src={logo} alt="Logo" />
                            <span>FVE STAVBY</span>
                        </NavLink>
                        <p>Fotovoltaika, která dává smysl</p>
                    </div>
                    <div className="footer-top__right-container">
                        <div className="footer-top__nav">
                            <p>Navigation</p>
                            <ul className="footer-top__nav-list">
                                <li>Úvod</li>
                                <li>O nás</li>
                                <li>Dům</li>
                                <li>Firemní instalace</li>
                                <li>Kontakty</li>
                            </ul>
                        </div>
                        <ul className="footer-top__contact-details">
                            <li>
                                <span>Phone number</span>
                                <a href="tel:+420728803703">+420 728 803 703</a>
                            </li>
                            <li>
                                <span>E-mail</span>
                                <a href="mailto:obchod@fvestavby.com">
                                    obchod@fvestavby.com
                                </a>
                            </li>
                            <li>
                                <span>Address</span>
                                <a href="mailto:obchod@fvestavby.com">
                                    Nad Kamínkou 1563, Zbraslav, 156 00 Praha 5
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; FVE STAVBY 2025. All rights reserved</p>
                    <div>
                        <span>Site by </span>
                        <a
                            className="creator-link"
                            href="https://heeeyooo-studio.netlify.app/"
                        >
                            heeeyooo.studio
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
