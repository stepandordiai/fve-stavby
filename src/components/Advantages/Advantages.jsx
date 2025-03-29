import { useEffect } from "react";
import plusIcon from "./../../assets/icons/plus-black.png";
import "./Advantages.scss";

const Advantages = () => {
    useEffect(() => {
        document.querySelectorAll(".advantages-btn").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const ddWrapper = document.querySelectorAll(".dd-wrapper");
                const btnICon = document.querySelectorAll(
                    ".advantages-btn-icon"
                );

                ddWrapper[index].classList.toggle("dd-wrapper--active");
                btnICon[index].classList.toggle("advantages-btn-icon--active");
            });
        });
    }, []);

    return (
        <>
            <div className="divider"></div>
            <section className="advantages">
                <div className="advantages-title-container">
                    <h2>Proč si vybrat naši firmu?</h2>
                </div>
                <ul className="advantages-list">
                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                                Reseni na miru
                            </span>
                            <div className="advantages-btn-icon-container">
                                <img
                                    className="advantages-btn-icon advantages-btn-icon--active"
                                    src={plusIcon}
                                    alt=""
                                />
                            </div>
                        </button>
                        <div className="dd-wrapper dd-wrapper--active">
                            <p className="dd-details">
                                Na zaklade vasich potreb a pozadavku doporucime
                                vhodne reseni, se kterym usetrite a budete
                                sobestacni.
                            </p>
                        </div>
                    </li>
                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                                Zajistime cely proces
                            </span>
                            <div className="advantages-btn-icon-container">
                                <img
                                    className="advantages-btn-icon"
                                    src={plusIcon}
                                    alt=""
                                />
                            </div>
                        </button>
                        <div className="dd-wrapper">
                            <p className="dd-details">
                                Navrhneme reseni, zaridime vsechna povoleni,
                                nainstalujeme a fotovoltaiku spustime. Postarame
                                se i o nasledny servis.
                            </p>
                        </div>
                    </li>
                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                                Online sledování
                            </span>
                            <div className="advantages-btn-icon-container">
                                <img
                                    className="advantages-btn-icon"
                                    src={plusIcon}
                                    alt=""
                                />
                            </div>
                        </button>
                        <div className="dd-wrapper">
                            <p className="dd-details">
                                Dálkově sledujeme stav vaší fotovoltaické
                                elektrárny a pokud se vyskytne problém, okamžitě
                                o něm víme. Opravu zajistíme rychle a efektivně.
                            </p>
                        </div>
                    </li>
                    {/* <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                                Efektivni vyuziti prebytku
                            </span>
                            <div className="advantages-btn-icon-container">
                                <img
                                    className="advantages-btn-icon"
                                    src={plusIcon}
                                    alt=""
                                />
                            </div>
                        </button>
                        <div className="dd-wrapper">
                            <p className="dd-details">
                                Aby zadny kilowatt elektriny neprisel nazmar,
                                prenasime vznikle prebytky tam, kde vam co
                                nejlepe poslouzi. Vetsinou primo do firmy.
                            </p>
                        </div>
                    </li> */}
                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                                Nonstop servis
                            </span>
                            <div className="advantages-btn-icon-container">
                                <img
                                    className="advantages-btn-icon"
                                    src={plusIcon}
                                    alt=""
                                />
                            </div>
                        </button>
                        <div className="dd-wrapper">
                            <p className="dd-details">
                                Tymy specialistu mame po celem Cesku. Zarucni i
                                pozarucni servis diky tomu zajistujeme velmi
                                richle v kazdem regionu.
                            </p>
                        </div>
                    </li>

                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                                Nadstandardni zaruky
                            </span>
                            <div className="advantages-btn-icon-container">
                                <img
                                    className="advantages-btn-icon"
                                    src={plusIcon}
                                    alt=""
                                />
                            </div>
                        </button>
                        <div className="dd-wrapper">
                            <p className="dd-details">
                                Na panely a optimizery poskytujeme zaruku 25
                                let, na stridace SolarEdge az 20 let a na
                                konstrukce 20 let.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Advantages;
