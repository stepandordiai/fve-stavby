import leafIcon from "/assets/icons/leaf.png";
import moneyIcon from "/assets/icons/money.png";
import flashIcon from "/assets/icons/flash.png";
import shieldIcon from "/assets/icons/shield.png";
import "./WhySolar.scss";

const WhySolar = () => {
    return (
        <>
            <h2 className="why-solar__title">
                Proč byste měli používat solární energii
            </h2>
            <p style={{ marginTop: "12.5px" }}>
                Věříme v sílu sluneční energie transformovat životy a komunity
            </p>
            <div className="why-solar">
                <div className="why-solar__card">
                    <div className="why-solar__card-icon-container">
                        <img width={25} src={leafIcon} alt="" />
                    </div>
                    <div>
                        <span className="why-solar__card-title">
                            Environmentální přínosy
                        </span>
                        <div className="why-solar__card-dd">
                            <span>
                                Snížit uhlíkovou stopu, chránit a chránit
                                životní prostředí
                            </span>
                        </div>
                    </div>
                </div>
                <div className="why-solar__card">
                    <div className="why-solar__card-icon-container">
                        <img width={25} src={moneyIcon} alt="" />
                    </div>
                    <div>
                        <span className="why-solar__card-title">
                            Finanční výhody
                        </span>
                        <div className="why-solar__card-dd">
                            <span>
                                Nižší účty za energii, potenciální daňové
                                pobídky a větší úspory
                            </span>
                        </div>
                    </div>
                </div>
                <div className="why-solar__card">
                    <div className="why-solar__card-icon-container">
                        <img width={25} src={flashIcon} alt="" />
                    </div>
                    <div>
                        <span className="why-solar__card-title">
                            Energetická nezávislost
                        </span>
                        <div className="why-solar__card-dd">
                            <span>
                                Převezměte plnou kontrolu nad svým zdrojem
                                energie a maximalizujte svůj potenciál
                            </span>
                        </div>
                    </div>
                </div>
                <div className="why-solar__card">
                    <div className="why-solar__card-icon-container">
                        <img width={25} src={shieldIcon} alt="" />
                    </div>
                    <div>
                        <span className="why-solar__card-title">
                            Spolehlivost
                        </span>
                        <div className="why-solar__card-dd">
                            <span>
                                Užijte si nepřetržité napájení pro vaše pohodlí
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhySolar;
