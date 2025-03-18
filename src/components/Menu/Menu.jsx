import { NavLink } from "react-router-dom";
import { useEffect } from "react";
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

    const inactiveLink = "link js-link";
    const activeLink = "link js-link link--active";

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
                        to="/contact-us"
                    >
                        Contacts
                    </NavLink>
                </nav>
                <div className="menu__contacts-details">
                    <div>
                        <p>Phone number</p>
                        <a className="menu-link" href="tel:+420722001016">
                            +420 722 001 016
                        </a>
                    </div>
                    <div>
                        <p>E-mail</p>
                        <a className="menu-link" href="mailto:">
                            Viktor.tomyschynec@fvestavby.cz
                        </a>
                    </div>
                    <div>
                        <p>Address</p>
                        <a className="menu-link" href="">
                            Nad Kamínkou 1563, Zbraslav, 156 00 Praha 5
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
