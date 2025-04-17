import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/assets/img/6.jpg";
import img1 from "/assets/001.jpg";
import img2 from "/assets/002.webp";
import img3 from "/assets/003.jpg";
import img4 from "/assets/mc4.webp";
import "./Components.scss";

const Components = () => {
    return (
        <>
            <Helmet>
                <title>Komponenty | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"Komponenty"} img={img} />
            <div className="components">
                <div className="components-container" id="invertors">
                    <div className="components-container__title">
                        <a href="#invertors" className="components__title">
                        Střídače
                        </a>
                    </div>
                    <div className="inverter-container">
                        <img width={400} src={img1} alt="" />
                        <div>
                            <p className="inverter-title">
                            Deye SUN-5/6/8/10/12K-SG04LP3-EU
                            </p>
                            <p>
                                The Deye Three Phase Hybrid Inverter,
                                encompassing models SUN-5K-SG04LP3-EU,
                                SUN-6K-SG04LP3-EU, SUN-8K-SG04LP3-EU,
                                SUN-10K-SG04LP3-EU, and SUN-12K-SG04LP3-EU, is a
                                sophisticated energy management solution
                                designed for both residential and commercial
                                solar power applications. This series of
                                inverters is engineered to integrate solar power
                                generation with battery storage, ensuring
                                optimal energy utilization and enhancing overall
                                system efficiency.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="components-container" id="panels">
                    <div className="components-container__title">
                        <a href="#panels" className="components__title">
                        Panely
                        </a>
                    </div>
                    <div className="inverter-container">
                        <img width={400} src={img2} alt="" />
                        <div>
                            <p className="inverter-title">
                                Fotovoltaický solární panel Jinko Solar Tiger
                                Neo N-type 60HL4 480Wp černý rám - ZÁRUKA 30 LET
                                NA VÝKON
                            </p>
                            <p>Jinko Solar 480W</p>
                            <p>model: JKM480N-60HL4-V</p>
                            <p>černý rám: 1903 mm x 1134 mm x 30 mm</p>
                        </div>
                    </div>
                </div>
                <div className="components-container" id="optimizers">
                    <div className="components-container__title">
                        <a href="#optimizers" className="components__title">
                        Optimizéry
                        </a>
                    </div>
                    <div className="inverter-container">
                        <img width={400} src={img3} alt="" />
                        <div>
                            <p className="inverter-title">TIGO - TS4-A-S</p>
                            <p>
                                TS4-A-S (SAFETY) je pokročilé doplňkové řešení,
                                které dodává lepší funkcionlitu standardním FV
                                panelům pro vyšší spolehlivost.
                            </p>
                        </div>
                    </div>
                    <div className="inverter-container">
                        <img width={400} src={img3} alt="" />
                        <div>
                            <p className="inverter-title">
                                Tigo TS4-A-O -výkonový optimizér max. 700 Wp
                            </p>
                            <p>
                                Pro optimalizaci výroby energie v případě
                                zastínění, monitoring na úrovni panelů a rapid
                                shutdown (rychlé rozpojení) do 700 W.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="components-container" id="connectors">
                    <div className="components-container__title">
                        <a href="#connectors" className="components__title">
                        Bateriová uložiště
                        </a>
                    </div>
                    <div className="inverter-container">
                        <img width={400} src={img4} alt="" />
                        <div>
                            <p className="inverter-title">Konektory MC4, pár</p>
                            <p>
                                Konektory pro propojení FV panelů s vedením ke
                                střídači nebo propojení vedení od panelů se
                                střídačem. Umožňuje vytvořit rozpojitelný spoj
                                pro případnou výměnu součásti FV systému.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
        </>
    );
};

export default Components;
