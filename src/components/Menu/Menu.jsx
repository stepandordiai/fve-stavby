import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { useEffect } from "react";
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

    return (
        <section className="menu">
            <div className="menu-wrapper">
                <nav className="nav">
                    <NavLink className={"link js-link"} to="/">
                        Home
                    </NavLink>
                    <NavLink className={"link js-link"} to="/about-us">
                        About us
                    </NavLink>
                    <NavLink className={"link js-link"} to="/contact-us">
                        Contacts
                    </NavLink>
                </nav>
                <div className="menu__contacts-details">
                    <div>
                        <p>Phone number</p>
                        <a href="tel:+420722001016">+420 722 001 016</a>
                    </div>
                    <div>
                        <p>E-mail</p>
                        <a href="mailto:">Viktor.tomyschynec@fvestavby.cz</a>
                    </div>
                    <div>
                        <p>Address</p>
                        <a href="">Prddddddddddddda sadsa sad</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
