import { useEffect } from "react";
import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import logo from "./../../assets/logo/fvestavby-cz.png";
import logo1 from "./../../assets/logo/fvestavby-cz-1.png";
import logo2 from "./../../assets/logo/fvestavby-cz-2.png";
import logo3 from "./../../assets/logo/solar-panel.png";
import logo4 from "./../../assets/logo/solar.png";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home-top">
            <p className="home-loading__title">
                <img className="loading__title-icon" src={logo2} alt="" />
                <span>FVE STAVBY s.r.o</span>
            </p>
            <div className="home-details">
                <div className="home__info">
                    <p className="home__secondary-title">FVE STAVBY s.r.o.</p>
                    <p className="home__secondary-title">
                        Fotovoltaika, která dává smysl
                    </p>
                    <p className="home__title">
                        Light up your home or business <br /> with solar energy
                    </p>
                </div>

                <div className="home-details__btn">
                    <span>Order installation</span>
                    <img
                        className="home-details__btn-icon"
                        src={arrow}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
