import pdf from "./../../pdf/fve-stavby-price-quote-v1-low-quality.pdf";
import { NavLink } from "react-router-dom";
import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import downloadIcon from "./../../assets/icons/download.png";
import logo2 from "./../../assets/logo/fvestavby-cz-2.png";
import "./HomeTitle.scss";

const HomeTitle = () => {
    return (
        <>
            <div className="home-title">
                <p className="loading__title">
                    <img
                        className="loading__title-icon"
                        src={logo2}
                        alt="Logo"
                    />
                    <span>FVE STAVBY s.r.o</span>
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
                    <div className="home-title__links-container">
                        {/* <div
                            className="home-title__pdf"
                            href={pdf}
                            target="_blank"
                        >
                            <a href={pdf} target="_blank">
                                Cenovou nabídku
                            </a>
                            <span></span>
                            <a href={pdf} download={true}>
                                <img src={downloadIcon} alt="Download" />
                            </a>
                        </div> */}
                        <NavLink className="home-title__link" to={"/contacts"}>
                            <span>Domvluvte si nezavaznu sluzku</span>
                            <img
                                className="home-title__link-icon"
                                src={arrow}
                                alt=""
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTitle;
