import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import logo2 from "./../../assets/logo/fvestavby-cz-2.png";
import "./Header.scss";
import LngSelect from "../LngSelect/LngSelect";

const Header = () => {
    const inactiveHeaderLink = "header__link";
    const activeHeaderLink = "header__link header__link--active";

    return (
        <header className="header">
            <div className="header-top">
                <NavLink to={"/"} className="header-top__logo">
                    <img src={logo2} alt="Logo" />
                    <span>FVE STAVBY</span>
                </NavLink>
                <div className="header-top__nav">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                        to={"/house"}
                    >
                        Fotovoltaika pro rodinne domy
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeHeaderLink : inactiveHeaderLink
                        }
                        to={"/company"}
                    >
                        Firemní instalace
                    </NavLink>
                </div>
                <a href="tel:+420728803703" className="header-top__number">
                    +420 728 803 703
                </a>
                <LngSelect />
                <BurgerBtn />
            </div>
        </header>
    );
};

export default Header;
