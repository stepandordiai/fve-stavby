import { useEffect } from "react";
import plusIcon from "./../../assets/icons/plus-black.png";
import "./Process.scss";

const Process = () => {
    useEffect(() => {
        const processCard = document.querySelectorAll(".process-card");
        const processIcon = document.querySelectorAll(".process__icon");
        const detailsWrapper = document.querySelectorAll(".details-wrapper");

        for (let i = 0; i < processCard.length; i++) {
            processCard[i].addEventListener("click", () => {
                for (let i = 0; i < processCard.length; i++) {
                    processCard[i].classList.remove("process-card--active");
                    detailsWrapper[i].classList.remove(
                        "details-wrapper--active"
                    );
                    processIcon[i].classList.remove("process__icon--active");
                }
                processCard[i].classList.add("process-card--active");
                detailsWrapper[i].classList.add("details-wrapper--active");
                processIcon[i].classList.add("process__icon--active");
            });
        }
    }, []);

    return (
        <>
            <p className="process__title">Our process</p>
            <div className="process-grid">
                <div className="process-card process-card--active">
                    <p className="details-number">01</p>
                    <div className="details-wrapper details-wrapper--active">
                        <p>Technický audit</p>
                        <div className="process-divider"></div>
                        <p>
                            <mark>
                                Zjistime zakladni informace o vasich planech,
                                predstavach a moznostech - a navrhneme idealni
                                reseni
                            </mark>
                        </p>
                    </div>
                    <img
                        className="process__icon process__icon--active"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">02</p>
                    <div className="details-wrapper">
                        <p>Zajisteni podkladu</p>
                        <div className="process-divider"></div>
                        <p>
                            Zjistime zakladni informace o vasich planech,
                            predstavach a moznostech - a navrhneme idealni
                            reseni
                        </p>
                    </div>
                    <img
                        className="process__icon"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">03</p>
                    <div className="details-wrapper">
                        <p>Osobni konzultace</p>
                        <div className="process-divider"></div>

                        <p>
                            Nas technicky konzultant primo na miste zhodnoti
                            moznosti realizace
                        </p>
                    </div>
                    <img
                        className="process__icon"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">04</p>
                    <div className="details-wrapper">
                        <p> Podpis smlouvy</p>
                        <div className="process-divider"></div>

                        <p>
                            <mark>
                                Na zaklade vsech podkladu zpracujeme nabidku
                            </mark>
                        </p>
                    </div>
                    <img
                        className="process__icon"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">05</p>
                    <div className="details-wrapper">
                        <p>Priprava nabidky</p>
                        <div className="process-divider"></div>

                        <p>
                            Obstarame veskera povoleni, ktera pro realizaci
                            projektu potrebujete.
                        </p>
                    </div>
                    <img
                        className="process__icon"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">06</p>
                    <div className="details-wrapper">
                        <p>Vyrizeni administrativy</p>
                        <div className="process-divider"></div>

                        <p>
                            Obstarame veskera povoleni, ktera pro realizaci
                            projektu potrebujete.
                        </p>
                    </div>
                    <img
                        className="process__icon"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">07</p>
                    <div className="details-wrapper">
                        <p>Realizace projektu</p>
                        <div className="process-divider"></div>

                        <p>
                            Propojime vsechny komponenty a provedeme revizi.
                            Predame vam dokumentaci a zaskolime vas.
                        </p>
                    </div>
                    <img
                        className="process__icon"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">08</p>
                    <div className="details-wrapper">
                        <p>Servis a monitoring</p>
                        <div className="process-divider"></div>
                        <p>
                            Nadale hlidame funkcnost reseni a pripadny servis
                            zajistime co nejrychleji.
                        </p>
                    </div>
                    <img
                        className="process__icon"
                        width={30}
                        src={plusIcon}
                        alt=""
                    />
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
};

export default Process;
