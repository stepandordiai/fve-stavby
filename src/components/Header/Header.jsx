import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LngSelect from "../LngSelect/LngSelect";
import { useEffect } from "react";
import img1 from "/assets/001.jpg";
import img2 from "/assets/002.webp";
import img3 from "/assets/003.jpg";
import img4 from "/assets/mc4.webp";
import logo from "/assets/logo/solar-panel.png";
import "./Header.scss";

const Header = () => {
    useEffect(() => {
        document.addEventListener("mouseover", (e) => {
            const headerCard = document.querySelector(".header-card");
            const headerDd = document.querySelector(".products");
            const headerBottomDd = document.querySelector(".header-bottom-dd");
            const headerCardLinks =
                document.querySelectorAll(".header-card__link");
            if (
                e.target == headerCard ||
                e.target == headerDd ||
                e.target == headerCardLinks[0] ||
                e.target == headerCardLinks[1] ||
                e.target == headerCardLinks[2] ||
                e.target == headerCardLinks[3] ||
                e.target == headerBottomDd
            ) {
                document
                    .querySelector(".header-card")
                    .classList.add("header-card--active");
            } else {
                document
                    .querySelector(".header-card")
                    .classList.remove("header-card--active");
            }
        });

        // For mobile
        document.addEventListener("touchstart", (e) => {
            const headerCard = document.querySelector(".header-card");
            const headerDd = document.querySelector(".products");
            const headerBottomDd = document.querySelector(".header-bottom-dd");
            const headerCardLinks =
                document.querySelectorAll(".header-card__link");
            if (
                e.target == headerCard ||
                e.target == headerDd ||
                e.target == headerCardLinks[0] ||
                e.target == headerCardLinks[1] ||
                e.target == headerCardLinks[2] ||
                e.target == headerCardLinks[3] ||
                e.target == headerBottomDd
            ) {
                document
                    .querySelector(".header-card")
                    .classList.add("header-card--active");
            } else {
                document
                    .querySelector(".header-card")
                    .classList.remove("header-card--active");
            }
        });

        //  Close header card on link click
        document.querySelectorAll(".header-card__link").forEach((link) => {
            link.addEventListener("click", () => {
                document
                    .querySelector(".header-card")
                    .classList.remove("header-card--active");
            });
        });
    }, []);

    const inactiveHeaderLink = "header__link";
    const activeHeaderLink = "header__link header__link--active bg--acent";

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <NavLink to={"/"} className="header-top__logo">
                        <img src={logo} alt="Logo" />
                        <span>FVE STAVBY</span>
                    </NavLink>
                    <a href="tel:+420728803703" className="header-top__number">
                        +420 728 803 703
                    </a>
                    <LngSelect />
                    <BurgerBtn />
                </div>
                <div className="header-bottom">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                    >
                        Úvod
                    </NavLink>
                    <NavLink
                        to={"/about-us"}
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                    >
                        O nás
                    </NavLink>
                    <NavLink
                        to={"/house"}
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                    >
                        Fotovoltaika pro rodinné domy
                    </NavLink>
                    <NavLink
                        to={"/company"}
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                    >
                        Firemní instalace
                    </NavLink>
                    <div className="header-bottom-dd">
                        <NavLink
                            to={"/components"}
                            className={({ isActive }) =>
                                isActive
                                    ? activeHeaderLink + " products"
                                    : inactiveHeaderLink + " products"
                            }
                        >
                            Komponenty
                        </NavLink>
                    </div>
                    <NavLink
                        to={"/our-installation"}
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                    >
                        Naše instalace
                    </NavLink>
                    <NavLink
                        to={"/contacts"}
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                    >
                        Kontakty
                    </NavLink>
                </div>
            </header>
            <div className="header-card">
                <HashLink
                    className={"header-card__link"}
                    to={"/components#invertors"}
                >
                    <img className="header-card__img" src={img1} alt="" />
                    <span>Inverters</span>
                </HashLink>
                <HashLink
                    className={"header-card__link"}
                    to={"/components#panels"}
                >
                    <img className="header-card__img" src={img2} alt="" />
                    <span>Panels</span>
                </HashLink>
                <HashLink
                    className={"header-card__link"}
                    to={"/components#optimizers"}
                >
                    <img className="header-card__img" src={img3} alt="" />
                    <span>Optimizers</span>
                </HashLink>
                <HashLink
                    className={"header-card__link"}
                    to={"/components#connectors"}
                >
                    <img className="header-card__img" src={img4} alt="" />
                    <span>Konektors</span>
                </HashLink>
            </div>
        </>
    );
};

export default Header;
