import { Helmet } from "react-helmet";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import isTouchDevice from "../../utils/isTouchDevice";
import img from "/assets/img/5.jpg";
import closeIcon from "/assets/icons/close-white.png";
import expandIcon from "/assets/icons/expand-white.png";
import shrinkIcon from "/assets/icons/shrink-white.png";
import "./OurInstallation.scss";

const OurInstallation = () => {
    const installationsData = [
        {
            id: 1,
            img: "/assets/installations/01.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 2,
            img: "/assets/installations/02.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 3,
            img: "/assets/installations/03.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 4,
            img: "/assets/installations/04.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 5,
            img: "/assets/installations/05.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 6,
            img: "/assets/installations/06.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 7,
            img: "/assets/installations/07.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 8,
            img: "/assets/installations/08.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 9,
            img: "/assets/installations/09.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 10,
            img: "/assets/installations/10.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
        {
            id: 11,
            img: "/assets/installations/11.jpeg",
            installationDate: "18.03.2025",
            description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
        },
    ];

    useEffect(() => {
        document
            .querySelectorAll(".our-installation__card img")
            .forEach((img, index) => {
                img.addEventListener("click", () => {
                    if (index + 1 === installationsData[index].id) {
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

                        if (!isTouchDevice()) {
                            fullScreenBtn.classList.add("full-screen__btn");
                        } else {
                            fullScreenBtn.classList.add(
                                "full-screen__btn--hide"
                            );
                        }

                        fullScreenCloseBtn.innerHTML = `<img title="Close" src="${closeIcon}" alt="Close icon" loading="lazy" />`;
                        fullScreenImage.src = installationsData[index].img;
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

                        // Append elements
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

        // Specify width for each card white background in case if date bigger or smaller
        const dateElements = document.querySelectorAll(
            ".our-installation__card-date-info"
        );
        const behindDateElements = document.querySelectorAll(
            ".behind-date-element"
        );

        dateElements.forEach((dateElement, index) => {
            behindDateElements[index].style.width = `${
                dateElement.offsetWidth + 10
            }px`;
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
                    {installationsData.map(
                        ({ id, img, installationDate, description }) => {
                            return (
                                <div
                                    key={id}
                                    className="our-installation__card-wrapper"
                                >
                                    <div className="our-installation__card">
                                        <img src={img} alt={description} />
                                        <div className="behind-date-element"></div>
                                        <p className="our-installation__card-date-info">
                                            Instalováno {installationDate}
                                        </p>
                                    </div>
                                    <p className="our-installation__card-info">
                                        {description}
                                    </p>
                                </div>
                            );
                        }
                    )}
                </div>
            </section>
            <GetInTouch />
        </>
    );
};

export default OurInstallation;
