import { useEffect } from "react";
import img1 from "./../../assets/img/4.png";
import img2 from "./../../assets/img/1.jpg";
import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import "./HomeAboutCompany.scss";
import { NavLink } from "react-router-dom";

const HomeAboutCompany = () => {
    // useEffect(() => {
    // let isClosureUsed = false;

    // document.addEventListener("scroll", () => {
    // const counterContainer = document.querySelector(
    //     ".about-company__counter-container"
    // );

    // const counters = document.querySelectorAll(".counter");

    // if (counters) {
    //     counters.forEach((counter) => {
    //         let counterRect = counter.getBoundingClientRect().top;
    //         let counterInner = counter.querySelector("p");
    //         let counterText = counterInner.textContent;

    //         if (counterRect < window.innerHeight) {
    //             if (!isClosureUsed) {
    //                 closureCounterOuter(counterInner, counterText, 100);
    //                 // closureCounterOuter("client", 380, 10);
    //                 // closureCounterOuter("work", 50, 50);
    //                 isClosureUsed = true;
    //             }
    //         }
    //     });
    // const counterContainerRect =
    //     counterContainer.getBoundingClientRect().top;
    // if (counterContainerRect < window.innerHeight) {
    //     if (!isClosureUsed) {
    //         closureCounterOuter("year", 14, 100);
    //         closureCounterOuter("client", 380, 10);
    //         closureCounterOuter("work", 50, 50);
    //         isClosureUsed = true;
    //     }
    //             // }
    //         }
    //     });
    // }, []);

    // function closureCounterOuter(id, qty, speed) {
    //     let isCounting = false;
    //     const text = id;
    //     const width = text.offsetWidth;
    //     if (!isCounting) {
    //         let initQty = 0;
    //         let customInterval = setInterval(closureCounterInner, speed);
    //         function closureCounterInner() {
    //             if (initQty === qty) {
    //                 clearInterval(customInterval);
    //             } else {
    //                 initQty++;
    //                 id.innerHTML = initQty;
    //                 text.style.width = `${width}px`;
    //             }
    //         }
    //     }
    //     isCounting = true;
    // }

    useEffect(() => {
        let valueDisplays = document.querySelectorAll(".counter-wrapper");
        const valueWrappers = document.querySelectorAll(".value-wrapper");
        let interval = 1000;

        valueDisplays.forEach((valueDisplay, index) => {
            let isUsed = false;
            addEventListener("scroll", () => {
                const valueDisplayRect =
                    valueDisplay.getBoundingClientRect().top;
                const valueText = valueWrappers[index].offsetWidth;
                if (valueDisplayRect < window.innerHeight) {
                    if (!isUsed) {
                        let startValue = 0;
                        let endValue = parseInt(
                            valueDisplay.getAttribute("data-val")
                        );

                        let duration = Math.floor(interval / endValue);

                        function start() {
                            let counter = setTimeout(() => {
                                startValue += 1;
                                valueWrappers[
                                    index
                                ].style.width = `${valueText}px`;
                                valueDisplay.textContent = startValue;

                                // I tried to increase duration every loop so counter end up smoothly

                                duration += 0.5;
                                if (startValue == endValue) {
                                    clearTimeout(counter);
                                } else {
                                    start();
                                }
                            }, duration);
                        }

                        start();
                    }
                    isUsed = true;
                }
            });
        });
    }, []);

    return (
        <div className="home-about-company">
            <h2 className="about-company__title">O naší společnosti</h2>
            <p className="about-company__sec-title">
                V dnešní době, kdy roste důraz na udržitelnost a energetickou
                soběstačnost, se fotovoltaika stává klíčovým řešením pro
                domácnosti i firmy. Výběr správného partnera pro realizaci
                fotovoltaického systému je zásadní. Jsme tým zkušených
                profesionálů. Každý z nás se v energetice pohybuje již dlouhá
                léta a nabízíme komplexní služby, které zaručují maximální
                spokojenost zákazníků.
                <br />
                <br />
                Především klademe důraz na individuální přístup. Každý projekt
                je pro nás jedinečný a věnujeme mu maximální péči od prvotní
                konzultace, přes projekt, až po samotnou instalaci a následný
                servis. Naši odborníci Vám pomohou vybrat optimální řešení,
                které bude odpovídat Vašim potřebám, finančním možnostem a
                charakteru Vaší nemovitosti.
                <br />
                <br />
                Dbáme na kvalitu použitých materiálů a technologií.
                Spolupracujeme s předními světovými výrobci, což zajišťuje
                dlouhou životnost a vysokou efektivitu našich systémů. Kromě
                toho Vám pomůžeme s administrativou a získáním dotací, abyste
                měli celý proces co nejjednodušší.
                <br />
                <br />
                Naší prioritou je transparentnost, spolehlivost a budování
                dlouhodobých vztahů. S námi získáte nejen kvalitní produkt, ale
                také jistotu, že se o Vás postaráme i po dokončení instalace.
                Věříme, že investice do fotovoltaiky má smysl, a rádi Vás na
                této cestě podpoříme. Vyberte si nás a získejte spolehlivého
                partnera pro vaši energetickou budoucnost.
            </p>
            <div className="about-company__counter-container">
                <div className="counter">
                    <p className="counter-wrapper value-wrapper" data-val="5">
                        0
                    </p>
                    <p>let praxe</p>
                </div>
                <div className="counter">
                    <p>
                        <span
                            className="counter-wrapper value-wrapper"
                            data-val="100"
                        >
                            000
                        </span>
                        <span>+</span>
                    </p>

                    <p>klientů</p>
                </div>
                <div className="counter">
                    <p className="counter-wrapper value-wrapper" data-val="14">
                        00
                    </p>
                    <p>pracovníků</p>
                </div>
            </div>
            <NavLink to={"/about-us"} className="about-company__link">
                <span>Více o nás</span>
                <img
                    className="about-company__link-icon"
                    src={arrow}
                    alt="Arrow"
                />
            </NavLink>
            <h2 className="we-work-with__title">Pracujeme s</h2>
            <div className="cards-container">
                <div className="card">
                    <p className="card__title">Fotovoltaika pro rodinne domy</p>
                    <img
                        className="card__img"
                        src={img1}
                        alt=""
                        loading="lazy"
                    />
                    <NavLink to={"/house"} className="card__link">
                        <img
                            className="card__link-icon"
                            src={arrow}
                            alt="Arrow"
                            loading="lazy"
                        />
                    </NavLink>
                    <div className="card__white-element"></div>
                </div>
                <div className="card">
                    <p className="card__title">Firemní instalace</p>
                    <img
                        className="card__img"
                        src={img2}
                        alt=""
                        loading="lazy"
                    />
                    <NavLink to={"/company"} className="card__link">
                        <img
                            className="card__link-icon"
                            src={arrow}
                            alt="Arrow"
                            loading="lazy"
                        />
                    </NavLink>
                    <div className="card__white-element"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutCompany;
