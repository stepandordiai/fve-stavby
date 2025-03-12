import { useEffect } from "react";
import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home-top">
            <p className="home-loading__title">FveStavby</p>
            <div className="home-details">
                <div>
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
