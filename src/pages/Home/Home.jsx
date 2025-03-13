import { useEffect } from "react";
import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import logo from "./../../assets/logo/fvestavby-cz.png";
import logo1 from "./../../assets/logo/fvestavby-cz-1.png";
import logo2 from "./../../assets/logo/fvestavby-cz-2.png";
import logo3 from "./../../assets/logo/solar-panel.png";
import logo4 from "./../../assets/logo/solar.png";
import "./Home.scss";

const Home = () => {
    useEffect(() => {
        addEventListener("scroll", () => {
            if (
                document
                    .querySelector(".home__about-us-card-container")
                    .getBoundingClientRect().top < window.innerHeight
            ) {
                closureYears("year", 14);
                closureYears1("client", 380);
                closureYears2("work", 50);
            }
        });
    }, []);

    let started = false;
    function closureYears(param, quantity) {
        if (!started) {
            let score = 0;
            let id = setInterval(closureInner, 100);
            function closureInner() {
                if (score === quantity) {
                    clearInterval(id);
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started = true;
    }

    let started1 = false;

    function closureYears1(param, quantity) {
        if (!started1) {
            let score = 0;
            let id = setInterval(closureInner, 10);
            function closureInner() {
                if (score === quantity) {
                    clearInterval(id);
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started1 = true;
    }

    let started2 = false;

    function closureYears2(param, quantity) {
        if (!started2) {
            let score = 0;
            let id = setInterval(closureInner, 50);
            function closureInner() {
                if (score === quantity) {
                    clearInterval(id);
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started2 = true;
    }

    // useEffect(() => {

    // })
    return (
        <>
            <div className="home-top">
                <p className="home-loading__title">
                    <img className="loading__title-icon" src={logo2} alt="" />
                    <span>FVE STAVBY s.r.o</span>
                </p>
                <div className="home-details">
                    <div className="home__info">
                        <p className="home__secondary-title">
                            FVE STAVBY s.r.o.
                        </p>
                        <p className="home__secondary-title">
                            Fotovoltaika, která dává smysl
                        </p>
                        <p className="home__title">
                            Light up your home or business <br /> with solar
                            energy
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
            <div className="home__about-us">
                <p>About company</p>
                <p className="home__about-us-title">
                    Our company dedicated to harnessing the power of the sun to
                    provide sustainable and eco-friendly energy solutions
                </p>
                <div className="home__about-us-card-container">
                    <div className="card">
                        <p id="year">14</p>
                        <p>years of work</p>
                    </div>
                    <div className="card">
                        <p id="client">380</p>
                        <p>clients</p>
                    </div>
                    <div className="card">
                        <p id="work">50</p>
                        <p>workers</p>
                    </div>
                </div>
                <div className="home__about-us-btn">
                    <span>More about us</span>
                    <img
                        className="home__about-us-btn-icon"
                        src={arrow}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
