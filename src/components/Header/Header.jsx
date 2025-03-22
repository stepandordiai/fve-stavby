import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo/fvestavby-cz.png";
import logo1 from "./../../assets/logo/fvestavby-cz-1.png";
import logo2 from "./../../assets/logo/fvestavby-cz-2.png";
import logo3 from "./../../assets/logo/solar-panel.png";
import logo4 from "./../../assets/logo/solar.png";

import "./Header.scss";

const Header = () => {
    // useEffect(() => {
    //     const header = document.querySelector(".header");

    //     addEventListener("scroll", () => {
    //         if (window.scrollY > window.innerHeight) {
    //             header.classList.add("header--hide");
    //         } else {
    //             header.classList.remove("header--hide");
    //         }
    //     });
    // }, []);

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <NavLink to={"/"} className="header-top__logo-container">
                        <img src={logo2} alt="Logo" />
                        <span>FVE STAVBY</span>
                    </NavLink>
                    <div className="header-top__nav">
                        <NavLink className={"header-link"} to={"/"}>
                            Dům
                        </NavLink>
                        <NavLink className={"header-link"}>
                            Firemní instalace
                        </NavLink>
                    </div>
                    <a href="tel:+420728803703" className="header-top__number">
                        +420 728 803 703
                    </a>
                    <BurgerBtn />
                </div>
            </header>
        </>
    );
};

export default Header;
