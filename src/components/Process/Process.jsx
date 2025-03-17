import "./Process.scss";

const Process = () => {
    return (
        <>
            <p className="process__title">Our process</p>
            <div className="process-grid">
                <div className="process-card">
                    <p>01</p>
                    <p>Zajisteni podkladu</p>
                    <div className="process-divider"></div>
                    <p>
                        Zjistime zakladni informace o vasich planech,
                        predstavach a moznostech - a navrhneme idealni reseni
                    </p>
                </div>
                <div className="process-card">
                    <p>02</p>
                    <p>Osobni konzultace</p>
                    <div className="process-divider"></div>

                    <p>
                        Nas technicky konzultant primo na miste zhodnoti
                        moznosti realizace
                    </p>
                </div>
                <div className="process-card">
                    <p>03</p>
                    <p>Priprava nabidky</p>
                    <div className="process-divider"></div>

                    <p>Na zaklade vsech podkladu zpracujeme nabidku</p>
                </div>
                <div className="process-card">
                    <p>04</p>
                    <p>Vyrizeni administrativy</p>
                    <div className="process-divider"></div>

                    <p>
                        Obstarame veskera povoleni, ktera pro realizaci projektu
                        potrebujete.
                    </p>
                </div>
                <div className="process-card">
                    <p>05</p>
                    <p>Realizace projektu</p>
                    <div className="process-divider"></div>

                    <p>
                        Propojime vsechny komponenty a provedeme revizi. Predame
                        vam dokumentaci a zaskolime vas.
                    </p>
                </div>
                <div className="process-card">
                    <p>06</p>
                    <p>Servis a monitoring</p>
                    <div className="process-divider"></div>

                    <p>
                        Nadale hlidame funkcnost reseni a pripadny servis
                        zajistime co nejrychleji.
                    </p>
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
};

export default Process;
