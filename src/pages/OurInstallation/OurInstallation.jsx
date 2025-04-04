import { Helmet } from "react-helmet";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import isTouchDevice from "../../utils/isTouchDevice";
import img from "/assets/img/5.jpg";
import installationImg1 from "/assets/installations/1.jpg";
import installationImg2 from "/assets/installations/2.jpg";
import installationImg3 from "/assets/installations/3.jpg";
import installationImg4 from "/assets/installations/4.jpg";
import installationImg5 from "/assets/installations/5.jpg";
import installationImg6 from "/assets/installations/6.jpg";
import closeIcon from "/assets/icons/close-white.png";
import expandIcon from "/assets/icons/expand-white.png";
import shrinkIcon from "/assets/icons/shrink-white.png";
import "./OurInstallation.scss";

const OurInstallation = () => {
    const imgData = [
        {
            id: 1,
            img: installationImg1,
        },
        {
            id: 2,
            img: installationImg2,
        },
        {
            id: 3,
            img: installationImg3,
        },
        {
            id: 4,
            img: installationImg4,
        },
        {
            id: 5,
            img: installationImg5,
        },
        {
            id: 6,
            img: installationImg6,
        },
    ];

    useEffect(() => {
        document
            .querySelectorAll(".our-installation__card img")
            .forEach((img, index) => {
                img.addEventListener("click", () => {
                    if (Number(img.dataset.value) == imgData[index].id) {
                        // Create elements

                        const fullScreen = document.createElement("div");
                        const fullScreenHeader =
                            document.createElement("header");
                        const fullScreenCloseBtn =
                            document.createElement("button");
                        const fullScreenImage = document.createElement("img");
                        const fullScreenFooter =
                            document.createElement("footer");
                        const fullScreenBtn = document.createElement("button");

                        // Add classNames for elements

                        fullScreen.classList.add("full-screen-div");
                        fullScreenHeader.classList.add("full-screen-header");
                        fullScreenCloseBtn.classList.add(
                            "full-screen__close-btn"
                        );
                        fullScreenImage.classList.add("full-screen-image");
                        fullScreenFooter.classList.add("full-screen-footer");

                        if (!isTouchDevice) {
                            fullScreenBtn.classList.add("full-screen__btn");
                        } else {
                            fullScreenBtn.classList.add(
                                "full-screen__btn--hide"
                            );
                        }

                        fullScreenCloseBtn.innerHTML = `<img title="Close" src="${closeIcon}" alt="Close icon" loading="lazy" />`;
                        fullScreenImage.src = imgData[index].img;
                        fullScreenBtn.innerHTML = `<img title="Expand" src="${expandIcon}" alt="Expand icon" loading="lazy" />`;

                        fullScreenCloseBtn.addEventListener("click", () => {
                            fullScreen.remove();
                        });
                        fullScreenBtn.addEventListener("click", () => {
                            if (
                                fullScreenBtn
                                    .querySelector("img")
                                    .src.includes("expand")
                            ) {
                                if (fullScreen.requestFullScreen) {
                                    fullScreen.requestFullScreen();
                                } else if (fullScreen.mozRequestFullScreen) {
                                    fullScreen.mozRequestFullScreen();
                                } else if (fullScreen.webkitRequestFullScreen) {
                                    fullScreen.webkitRequestFullScreen();
                                }
                                fullScreenBtn.innerHTML = `<img title="Shrink" src="${shrinkIcon}" alt="Shrink icon" loading="lazy" />`;
                            } else {
                                document.exitFullscreen();
                                fullScreenBtn.innerHTML = `<img title="Expand" src="${expandIcon}" alt="Expand icon" loading="lazy" />`;
                            }
                        });

                        // Appending elements

                        document.body.appendChild(fullScreen);
                        fullScreen.append(
                            fullScreenHeader,
                            fullScreenImage,
                            fullScreenFooter
                        );
                        fullScreenHeader.appendChild(fullScreenCloseBtn);
                        fullScreenFooter.appendChild(fullScreenBtn);
                    }
                });
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Naše instalace | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"Naše instalace"} img={img} />
            <section className="our-installation">
                <p className="our-installation__title">
                    Na spokojenosti našich zákazníků nám záleží. Zde si můžete
                    prohlédnout některé z našich instalací fotovoltaických
                    elektráren. Pokud vás nějaká ze zhotovených instalací
                    zaujala, neváhejte nás kontaktovat
                </p>
                <div className="our-installation__grid">
                    <div className="our-installation__card-wrapper">
                        <div className="our-installation__card">
                            <img src={installationImg1} data-value="1" alt="" />
                            <div className="white-el"></div>
                            <p className="our-installation__card-date-info">
                                <span>Instalováno 18.12.2024</span>
                            </p>
                        </div>
                        <p className="our-installation__card-info">
                            Černá Voda, 24x Trina Solar 450, 10.8kWp
                        </p>
                    </div>
                    <div className="our-installation__card-wrapper">
                        <div className="our-installation__card">
                            <img src={installationImg2} data-value="2" alt="" />
                            <div className="white-el"></div>
                            <p className="our-installation__card-date-info">
                                <span>Instalováno 18.12.2024</span>
                            </p>
                        </div>
                        <p className="our-installation__card-info">
                            Lhota, 20x Aiko Solar 500, 10.0 kWp
                        </p>
                    </div>
                    <div className="our-installation__card-wrapper">
                        <div className="our-installation__card">
                            <img src={installationImg3} data-value="3" alt="" />
                            <div className="white-el"></div>
                            <p className="our-installation__card-date-info">
                                <span>Instalováno 18.12.2024</span>
                            </p>
                        </div>
                        <p className="our-installation__card-info">
                            Karviná, 20x Trina Solar 500, 10.0 kWp
                        </p>
                    </div>
                    <div className="our-installation__card-wrapper">
                        <div className="our-installation__card">
                            <img src={installationImg4} data-value="4" alt="" />
                            <div className="white-el"></div>
                            <p className="our-installation__card-date-info">
                                <span>Instalováno 18.12.2024</span>
                            </p>
                        </div>
                        <p className="our-installation__card-info">
                            Liber, 21x Trina Solar 500, 10.5 kWp
                        </p>
                    </div>
                    <div className="our-installation__card-wrapper">
                        <div className="our-installation__card">
                            <img src={installationImg5} data-value="5" alt="" />
                            <div className="white-el"></div>
                            <p className="our-installation__card-date-info">
                                <span>Instalováno 18.12.2024</span>
                            </p>
                        </div>
                        <p className="our-installation__card-info">
                            Klínec, 12x Aiko 640, 7.7 kWp
                        </p>
                    </div>
                    <div className="our-installation__card-wrapper">
                        <div className="our-installation__card">
                            <img src={installationImg6} data-value="6" alt="" />
                            <div className="white-el"></div>
                            <p className="our-installation__card-date-info">
                                <span>Instalováno 18.12.2024</span>
                            </p>
                        </div>
                        <p className="our-installation__card-info">
                            Pysely, 20x Aiko 500, 10.0 kWp
                        </p>
                    </div>
                </div>
            </section>
            <GetInTouch />
        </>
    );
};

export default OurInstallation;
