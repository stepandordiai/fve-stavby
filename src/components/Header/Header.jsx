import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import logo from "./../../assets/logo/fvestavby-cz.png";
import "./Header.scss";

const Header = () => {
    useEffect(() => {
        const header = document.querySelector(".header");

        addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight) {
                header.classList.add("header--hide");
            } else {
                header.classList.remove("header--hide");
            }
        });
    }, []);

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <div className="header-top__logo-container">
                        <img src={logo} alt="Logo" />
                        <span>FveStavby</span>
                    </div>
                    <a href="tel:+420773802166" className="header-top__number">
                        +420 773 802 166
                    </a>
                    <BurgerBtn />
                </div>
                <div className="header-bottom">
                    <nav className="nav">
                        <p className="link">Ceník</p>
                        <div className="dd-container">
                            <p className="link">Fotovoltaika</p>
                            <div className="dd">
                                <p>Reference</p>
                                <p>Dotace</p>
                                <p>O nás</p>
                                <p>Přihlášení</p>
                            </div>
                        </div>
                        <p className="link">Reference</p>
                        <p className="link">Dotace</p>
                        <p className="link">O nás</p>
                        <p className="link">Přihlášení</p>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
