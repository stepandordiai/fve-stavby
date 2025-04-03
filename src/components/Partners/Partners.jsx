import partner1 from "/assets/partnersLogos/aiko.png";
import partner2 from "/assets/partnersLogos/canadian-solar.webp";
import partner3 from "/assets/partnersLogos/deye.png";
import partner4 from "/assets/partnersLogos/jinko.png";
import partner5 from "/assets/partnersLogos/solax.png";
import partner6 from "/assets/partnersLogos/tigo.png";

import "./Partners.scss";

const Partners = () => {
    return (
        <>
            <h2 className="partners-title">Naši partneři</h2>
            <p>
                Spolupracujeme s prvotřídními výrobci, dodavateli, firmami a
                institucemi z České republiky a zahraničí.
            </p>
            <div
                className="slider"
                // reverse="true"
                style={{
                    "--width": "100px",
                    "--height": "50px",
                    "--quantity": "6",
                }}
            >
                <div className="list">
                    <div className="item" style={{ "--position": "1" }}>
                        <a href="https://aikosolar.com/cz/" target="_blank">
                            <img src={partner1} alt="Partner Logo" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": "2" }}>
                        <a
                            href="https://www.canadiansolar.com/"
                            target="_blank"
                        >
                            <img src={partner2} alt="Partner Logo" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": "3" }}>
                        <a href="https://deye.com/" target="_blank">
                            <img src={partner3} alt="Partner Logo" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": "4" }}>
                        <a href="https://jinkosolar.eu/" target="_blank">
                            <img src={partner4} alt="Partner Logo" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": "5" }}>
                        <a href="https://www.solaxpower.com/" target="_blank">
                            <img src={partner5} alt="Partner Logo" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": "6" }}>
                        <a href="https://www.tigoenergy.com/" target="_blank">
                            <img src={partner6} alt="Partner Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;
