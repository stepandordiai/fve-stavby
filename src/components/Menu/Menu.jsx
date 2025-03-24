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
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/about-us"
                    >
                        About us
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/about-us"
                    >
                        Dům
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/about-us"
                    >
                        Firemní instalace
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/contacts"
                    >
                        Contacts
                    </NavLink>
                </nav>
                <ul className="menu__contacts-details">
                    <li>
                        <p>Phone number</p>
                        <a
                            className="menu-link link-effect"
                            href="tel:+420728803703"
                        >
                            +420 728 803 703
                        </a>
                    </li>
                    <li>
                        <p>E-mail</p>
                        <a
                            className="menu-link link-effect"
                            href="mailto:obchod@fvestavby.cz"
                        >
                            obchod@fvestavby.cz
                        </a>
                    </li>
                    <li>
                        <p>Address</p>
                        <a className="menu-link link-effect" href="">
                            Nad Kamínkou 1563, Zbraslav, 156 00 Praha 5
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Menu;
