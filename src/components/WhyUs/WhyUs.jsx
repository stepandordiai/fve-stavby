import { useEffect } from "react";
import plusIcon from "/assets/icons/plus-black.png";
import "./WhyUs.scss";

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
            {/* <div className="divider"></div> */}
            <section className="advantages">
                <div className="advantages-title-container">
                    <h2>Proč si vybrat naši firmu?</h2>
                </div>
                <ul className="advantages-list">
                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                            Řešení na míru
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
                            Na základě Vašich potřeb a požadavků doporučíme vhodné řešení, se kterým ušetříte a 
                            budete soběstační.
                            </p>
                        </div>
                    </li>
                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                            Zajistíme celý proces
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
                            Navrhneme řešení, zařídíme všechna povolení, nainstalujeme a fotovoltaiku spustíme.
                            Postaráme se i o následný servis.
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
                            Dálkově sledujeme stav Vaší fotovoltaické elektrárny a pokud se vyskytne problém,
                            okamžitě o něm víme. Opravu zajistíme rychle a efektivně.
                            </p>
                        </div>
                    </li>
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
                            Týmy specialistů máme po celém Česku. Záruční i pozáruční servis díky tomu zajišťujeme
                            velmi rychle v každém regionu.
                            </p>
                        </div>
                    </li>

                    <li className="advantages-item">
                        <button className="advantages-btn">
                            <span className="advantages-btn-title">
                            Nadstandartní záruky
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
                            Na panely a optimizéry poskytujeme záruku až 25 let, na střídače  až 20 let a na
                            konstrukce až 20 let.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Advantages;
