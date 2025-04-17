import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./../../global/LinkEffect.scss";
import "./Menu.scss";

const Menu = () => {
    useEffect(() => {
        document.querySelectorAll(".js-link").forEach((link) => {
            link.addEventListener("click", () => {
                document
                    .querySelector(".burger-btn")
                    .classList.remove("burger-btn--active");
                document
                    .querySelector(".burger-btn__center-line")
                    .classList.remove("burger-btn__center-line--active");

                document
                    .querySelector(".menu")
                    .classList.remove("menu--active");
                document
                    .querySelector(".menu-wrapper")
                    .classList.remove("menu-wrapper--active");
                document
                    .querySelector(".header-bottom")
                    .classList.remove("header-bottom--hide");
            });
        });
    });

    const inactiveLink = "link js-link link-effect";
    const activeLink = "link js-link link-effect link-effect--active";

    return (
        <section className="menu">
            <div className="menu-wrapper">
                <nav className="nav">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/"
                    >
                        Úvod
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/about-us"
                    >
                        O nás
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/house"
                    >
                        Fotovoltaika pro rodinne domy
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/company"
                    >
                        Firemní instalace
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/components"
                    >
                        Komponenty
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/our-installation"
                    >
                        Naše instalace
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/contacts"
                    >
                        Kontakty
                    </NavLink>
                </nav>
                <ul className="menu__contacts-details">
                    <li>
                        <p>Telefonní číslo</p>
                        <a className="menu-link" href="tel:+420728803703">
                            +420 728 803 703
                        </a>
                    </li>
                    <li>
                        <p>E-mail</p>
                        <a
                            className="menu-link"
                            href="mailto:info@fvestavby.cz"
                        >
                            info@fvestavby.cz
                        </a>
                    </li>
                    <li>
                        <p>Adresa</p>
                        <a
                            className="menu-link"
                            href="mailto:info@fvestavby.cz"
                        >
                            Pod Hroby 271 Kolín IV
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Menu;
