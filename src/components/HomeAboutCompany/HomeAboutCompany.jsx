import { useEffect } from "react";
import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import "./HomeAboutCompany.scss";

const HomeAboutCompany = () => {
    useEffect(() => {
        let isClosureUsed = false;

        document.addEventListener("scroll", () => {
            const counterContainer = document.querySelector(
                ".about-company__counter-container"
            );

            const counterContainerRect =
                counterContainer.getBoundingClientRect().top;

            if (counterContainer) {
                if (counterContainerRect < window.innerHeight) {
                    if (!isClosureUsed) {
                        closureCounterOuter("year", 14, 100);
                        closureCounterOuter("client", 380, 10);
                        closureCounterOuter("work", 50, 50);
                        isClosureUsed = true;
                    }
                }
            }
        });
    }, []);

    function closureCounterOuter(id, qty, speed) {
        let isCounting = false;
        const text = document.getElementById(id);
        const width = text.offsetWidth;
        if (!isCounting) {
            let initQty = 0;
            let customInterval = setInterval(closureCounterInner, speed);
            function closureCounterInner() {
                if (initQty === qty) {
                    clearInterval(customInterval);
                } else {
                    initQty++;
                    document.getElementById(id).innerHTML = initQty;
                    text.style.width = `${width}px`;
                }
            }
        }
        isCounting = true;
    }

    return (
        <div className="home-about-company">
            <p className="about-company__title">About company</p>
            <p className="about-company__sec-title">
                Our company dedicated to harnessing the power of the sun to
                provide sustainable and eco-friendly energy solutions
            </p>
            <div className="about-company__counter-container">
                <div className="counter">
                    <p id="year">14</p>
                    <p>years of work</p>
                </div>
                <div className="counter">
                    <p id="client">380</p>
                    <p>clients</p>
                </div>
                <div className="counter">
                    <p id="work">30</p>
                    <p>workers</p>
                </div>
            </div>
            <button className="about-company__btn">
                <span>More about us</span>
                <img
                    className="about-company__btn-icon"
                    src={arrow}
                    alt="Arrow"
                />
            </button>
            {/*  */}
            <p>We work with</p>
            <div className="img-box-container">
                <div className="img-box">
                    Dům
                    <div className="img-box-btn">
                        <img
                            className="img-box-btn-icon"
                            src={arrow}
                            alt="Arrow"
                            loading="lazy"
                        />
                    </div>
                    <div className="white-box"></div>
                </div>
                <div className="img-box1">
                    Firemní instalace
                    <div className="img-box-btn">
                        <img
                            className="img-box-btn-icon"
                            src={arrow}
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="white-box"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutCompany;
