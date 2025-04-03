import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/assets/img/5.jpg";
import installationImg1 from "/assets/installations/1.jpg";
import installationImg2 from "/assets/installations/2.jpg";
import installationImg3 from "/assets/installations/3.jpg";
import installationImg4 from "/assets/installations/4.jpg";
import installationImg5 from "/assets/installations/5.jpg";
import installationImg6 from "/assets/installations/6.jpg";
import "./OurInstallation.scss";

const OurInstallation = () => {
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
                            <img src={installationImg1} alt="" />
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
                            <img src={installationImg2} alt="" />
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
                            <img src={installationImg3} alt="" />
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
                            <img src={installationImg4} alt="" />
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
                            <img src={installationImg5} alt="" />
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
                            <img src={installationImg6} alt="" />
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
