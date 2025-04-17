import { NavLink } from "react-router-dom";
import arrow from "/assets/icons/arrow-upper-right-white.png";
import logo from "/assets/logo/solar-panel.png";
import "./HomeTitle.scss";

const HomeTitle = () => {
    return (
        <div className="home-title-wrapper">
            <div className="home-title">
                <p className="loading__title">
                    <img
                        className="loading__title-icon"
                        src={logo}
                        alt=""
                        loading="lazy"
                    />
                    <span>FVE STAVBY s.r.o.</span>
                </p>
                <div className="home-title__details-container">
                    <div className="home-title__details">
                        <h1 className="home-title__title">FVE STAVBY s.r.o.</h1>
                        <h2 className="home-title__sec-title">
                            Fotovoltaika, která dává smysl
                        </h2>
                        <h2 className="home-title__info">
                            Rozsviťte svůj domov, nebo firmu
                            <br />
                            se solární energií
                        </h2>
                    </div>
                    <NavLink className="home-title__link" to={"/contacts"}>
                        <span>Domvluvte si nezavaznu sluzku</span>
                        <img
                            className="home-title__link-icon"
                            src={arrow}
                            alt=""
                            loading="lazy"
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeTitle;
