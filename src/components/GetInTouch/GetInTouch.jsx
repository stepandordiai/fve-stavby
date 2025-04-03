import { NavLink } from "react-router-dom";
import img from "./../../assets/img/2.jpg";
import arrowIcon from "./../../assets/icons/arrow-upper-right-white.png";
import "./GetInTouch.scss";

const GetInTouch = () => {
    return (
        <div className="get-in-touch">
            <img className="get-in-touch__bg" src={img} alt="" loading="lazy" />
            <p className="get-in-touch__title">
                Konzultace od našich odborníků
            </p>
            <NavLink to={"/contacts"} className="get-in-touch__link">
                <span>Chci nabídku</span>
                <img
                    className="get-in-touch__link-icon"
                    src={arrowIcon}
                    alt="Arrow icon"
                    loading="lazy"
                />
            </NavLink>
        </div>
    );
};

export default GetInTouch;
