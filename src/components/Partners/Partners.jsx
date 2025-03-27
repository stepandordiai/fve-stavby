import logo from "./../../assets/partnersLogos/solax.png";
import logo1 from "./../../assets/partnersLogos/deye.png";
import "./Partners.scss";

const Partners = () => {
    return (
        <>
            <h2 className="partners-title">V dobré společnosti</h2>
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
                    "--quantity": "2",
                }}
            >
                <div className="list">
                    <div className="item" style={{ "--position": "1" }}>
                        <a href="https://us.solaxpower.com/" target="_blank">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": "2" }}>
                        <a href="https://deye.com/cs/" target="_blank">
                            <img src={logo1} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;
