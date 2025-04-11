import targetIcon from "/assets/icons/target.png";
import approachIcon from "/assets/icons/approach.png";
import styles from "./Mission.module.scss";

const Mission = () => {
    return (
        <>
            <h2 className={styles["mission__title"]}>Mise</h2>
            <div className={styles["mission"]}>
                <div className={styles["mission-card"]}>
                    <div className={styles["mission-card__icon-container"]}>
                        <img src={targetIcon} alt="" />
                    </div>
                    <div className={styles["mission-card__title"]}>Náš cíl</div>
                    <div className={styles["mission-card__desc"]}>
                        je snížit provozní náklady domu nebo firmy implementací
                        solárního systému, který snižuje závislost na výkonu
                        sítě.
                    </div>
                </div>
                <div className={styles["mission-card"]}>
                    <div className={styles["mission-card__icon-container"]}>
                        <img src={approachIcon} alt="" />
                    </div>
                    <div className={styles["mission-card__title"]}>
                        Náš přístup
                    </div>
                    <div className={styles["mission-card__desc"]}>
                        je zachytit vaši vizi od začátku a provádět ji s
                        nejvyššími standardy až po dokončení. Dosahujeme toho
                        prostřednictvím kvalitního návrhu, profesionálního
                        řízení a monitorování výkonu každého solárního systému,
                        který nasadíme.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mission;
