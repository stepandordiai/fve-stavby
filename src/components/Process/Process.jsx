import { useEffect } from "react";
import plusIcon from "/assets/icons/plus-black.png";
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
            <h2 className="process__title">Náš proces</h2>
            <div className="process-grid">
                <div className="process-card process-card--active">
                    <p className="details-number">01</p>
                    <div className="details-wrapper details-wrapper--active">
                        <p>Osobní konzultace a zajištění podkladů</p>
                        <div className="process-divider"></div>

                        <p>
                        Náš technický konzultant přímo na místě zhodnotí možnosti realizace. Zjistí
základní informace o Vašich plánech, představách a možnostech  a navrhne
ideální řešení.
                        </p>
                    </div>
                    <img
                        className="process__icon process__icon--active"
                        src={plusIcon}
                        alt=""
                    />
                </div>
                <div className="process-card">
                    <p className="details-number">02</p>
                    <div className="details-wrapper">
                        <p>Příprava nabídky</p>
                        <div className="process-divider"></div>

                        <p>
                        Na základě všech podkladů zpracujeme cenovou nabídku.
                        </p>
                    </div>
                    <img className="process__icon" src={plusIcon} alt="" />
                </div>
                <div className="process-card">
                    <p className="details-number">03</p>
                    <div className="details-wrapper">
                        <p>Technický audit</p>
                        <div className="process-divider"></div>

                        <p>V případě dohody Vás navštíví náš technický specialista, a dopodrobna s Vámi
projedná nejlepší možný technologický postup instalace Vaší fotovoltaické
elektrárny.</p>
                    </div>
                    <img className="process__icon" src={plusIcon} alt="" />
                </div>
                <div className="process-card">
                    <p className="details-number">04</p>
                    <div className="details-wrapper">
                        <p>Podpis smlouvy</p>
                        <div className="process-divider"></div>
                        <p>
                        Dalším krokem v postupu je podepsání smlouvy o dílo.
                        </p>
                        <div className="process-card__price">
                            Zdarma pro naše klienty
                        </div>
                    </div>
                    <img className="process__icon" src={plusIcon} alt="" />
                </div>

                <div className="process-card">
                    <p className="details-number">05</p>
                    <div className="details-wrapper">
                        <p>Vyřízení administrativy</p>
                        <div className="process-divider"></div>

                        <p>
                        Zajistíme veškerá povolení, která pro realizaci projektu potřebujeme a vyřídíme
                        Vám dotaci.
                        </p>
                    </div>
                    <img className="process__icon" src={plusIcon} alt="" />
                </div>
                <div className="process-card">
                    <p className="details-number">06</p>
                    <div className="details-wrapper">
                        <p>Realizace projektu</p>
                        <div className="process-divider"></div>

                        <p>
                        Nainstalujeme Vaši fotovoltaickou elektrárnu a provedeme revizi.
                        </p>
                    </div>
                    <img className="process__icon" src={plusIcon} alt="" />
                </div>
                <div className="process-card">
                    <p className="details-number">07</p>
                    <div className="details-wrapper">
                        <p>Servis a monitoring</p>
                        <div className="process-divider"></div>
                        <p>
                        Nadále hlídáme funkčnost instalace a v případě potřeby zajistíme servis co 
                        nejrychleji.
                        </p>
                    </div>
                    <img className="process__icon" src={plusIcon} alt="" />
                </div>
                <div className="process-card">
                    <p className="details-number">08</p>
                    <div className="details-wrapper">
                        <p>Spokojený zákazník</p>
                        <div className="process-divider"></div>
                        <p>
                        Spokojený zákazník, který používá svou fotovoltaickou elektrárnu a své
zkušenosti s montáží a firmou dále doporučuje svým kamarádům a známým.
                        </p>
                    </div>
                    <img className="process__icon" src={plusIcon} alt="" />
                </div>
            </div>
        </>
    );
};

export default Process;
