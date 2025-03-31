import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import logo2 from "./../../assets/logo/fvestavby-cz-2.png";
import "./Header.scss";
import LngSelect from "../LngSelect/LngSelect";
import { useEffect } from "react";
import img1 from "./../../assets/001.jpg";
import img2 from "./../../assets/002.webp";
import img3 from "./../../assets/003.jpg";
import img4 from "./../../assets/mc4.webp";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    const inactiveHeaderLink = "header__link";
    const activeHeaderLink = "header__link header__link--active";

    useEffect(() => {
        document.addEventListener("click", (e) => {
            const headerCard = document.querySelector(".header-card");
            const headerDd = document.querySelector(".products");
            const headerCardLink =
                document.querySelectorAll(".header-card__link");
            if (
                e.target == headerCard ||
                e.target == headerDd ||
                e.target == headerCardLink
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
    }, []);

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <NavLink to={"/"} className="header-top__logo">
                        <img src={logo2} alt="Logo" />
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
                    <NavLink
                        to={"/references"}
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                    >
                        References
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
