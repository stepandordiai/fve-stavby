import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/assets/img/7.jpg";
import userIcon from "/assets/icons/user.png";
// import "./AboutUs.scss";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>O nás | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"O nás"} img={img} />
            <div className={styles["about-us"]}>
                <h2 className={styles["our-team__title"]}>Náš tým</h2>
                <div className={styles["our-team__grid"]}>
                    <div className={styles["our-team__grid-item"]}>
                        <div className={styles["img-wrapper"]}>
                            <img src={userIcon} alt="" />
                        </div>
                        <p className={styles["our-team__grid-item-name"]}>
                            John Doe
                        </p>
                        <p className={styles["our-team__grid-item-position"]}>
                            Generální ředitel
                        </p>
                    </div>
                    <div className={styles["our-team__grid-item"]}>
                        <div className={styles["img-wrapper"]}>
                            <img src={userIcon} alt="" />
                        </div>
                        <p className={styles["our-team__grid-item-name"]}>
                            John Doe
                        </p>
                        <p className={styles["our-team__grid-item-position"]}>
                            Produktový manažer
                        </p>
                    </div>
                    <div className={styles["our-team__grid-item"]}>
                        <div className={styles["img-wrapper"]}>
                            <img src={userIcon} alt="" />
                        </div>
                        <p className={styles["our-team__grid-item-name"]}>
                            John Doe
                        </p>
                        <p className={styles["our-team__grid-item-position"]}>
                            Vedoucí montážních specialistů
                        </p>
                    </div>
                    <div className={styles["our-team__grid-item"]}>
                        <div className={styles["img-wrapper"]}>
                            <img src={userIcon} alt="" />
                        </div>
                        <p className={styles["our-team__grid-item-name"]}>
                            John Doe
                        </p>
                        <p className={styles["our-team__grid-item-position"]}>
                            Marketing
                        </p>
                    </div>
                </div>
                <h2 className={styles["guarantees__title"]}>
                    Záruky FVE STAVBY s.r.o.
                </h2>
                <div className={styles["guarantees__grid"]}>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>12</p>
                        <p>let střídač</p>
                    </div>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>15</p>
                        <p>let Fotovoltaické panely</p>
                    </div>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>25</p>
                        <p>let Záruka na výkon panelů</p>
                    </div>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>5</p>
                        <p>let Montáž</p>
                    </div>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>10</p>
                        <p>let Montážní systém</p>
                    </div>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>2</p>
                        <p>let Kabeláž</p>
                    </div>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>2</p>
                        <p>let Zabezpečení AC/DC </p>
                    </div>
                    <div className={styles["guarantees__grid-item"]}>
                        <p>6000</p>
                        <p>cyklů baterie</p>
                    </div>
                </div>
            </div>
            <GetInTouch />
        </>
    );
};

export default AboutUs;
