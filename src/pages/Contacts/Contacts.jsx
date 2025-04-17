import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import arrow from "/assets/icons/arrow-upper-right-white.png";
import img from "/assets/img/6.jpg";
import "./../../global/LinkEffect.scss";
import "./Contacts.scss";

const ContactUs = () => {
    const date = new Date();
    const dayNow = date.getDay();

    const inactiveDay = "business-hours__item";
    const activeDay = "business-hours__item business-hours__item--active";

    return (
        <>
            <Helmet>
                <title>Kontakty | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"Kontakty"} img={img} />
            <div className="contacts">
                <div className="contacts-left-container">
                    <h2 className="contacts-left-container__title">
                        Kontaktujte nas
                    </h2>
                    <form
                        className="form"
                        action="mailto:info@fvestavby.cz"
                        method="post"
                        encType="text/plain"
                    >
                        <div className="input-container">
                            <input
                                name="First name"
                                type="text"
                                placeholder="Jméno"
                            />
                            <input
                                name="Last name"
                                type="text"
                                placeholder="Příjmení"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                name="E-mail"
                                type="email"
                                placeholder="E-mail"
                            />
                            <input
                                name="Phone number"
                                type="tel"
                                placeholder="Telefonní číslo"
                            />
                        </div>
                        {/* <div>
                            <label htmlFor="lol">
                                <input
                                    className="radio-btn"
                                    id="lol"
                                    type="radio"
                                />
                                Residental
                            </label>
                        </div> */}
                        <textarea
                            name="Message"
                            // cols="30"
                            // rows="10"
                            placeholder="Zprava"
                        ></textarea>
                        <button className="form-btn" type="submit">
                            <span>Odeslat</span>
                            <img
                                className="form-btn__icon"
                                src={arrow}
                                alt=""
                            />
                        </button>
                    </form>
                </div>
                <div className="contacts-right-container">
                    <h2 className="contacts-right-container__title">
                        Kontaktní údaje
                    </h2>
                    <div className="contact-details-container">
                        <div className="contact-details">
                            <p className="contact-details__title">
                                Telefonní číslo
                            </p>
                            <a
                                className="contact-details__link"
                                href="tel:+420728803703"
                            >
                                +420 728 803 703
                            </a>
                        </div>
                        <div className="contact-details">
                            <p className="contact-details__title">E-mail</p>
                            <a
                                className="contact-details__link"
                                href="mailto:info@fvestavby.cz"
                            >
                                info@fvestavby.cz
                            </a>
                        </div>
                        <div className="contact-details">
                            <p className="contact-details__title">Adresa</p>
                            <a
                                className="contact-details__link"
                                href="mailto:info@fvestavby.cz"
                            >
                                Pod Hroby 271 Kolín IV
                            </a>
                        </div>
                        <div className="contact-details">
                            <p className="contact-details__title">
                                Pracovní doba
                            </p>
                            <ul className="business-hours__list">
                                <li
                                    className={
                                        dayNow === 1 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Pondělí:</span>
                                    <span>8:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 2 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Úterý:</span>
                                    <span>8:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 3 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Středa:</span>
                                    <span>8:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 4 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Čtvrtek:</span>
                                    <span>8:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 5 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Pátek:</span>
                                    <span>8:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 6 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Sobota:</span>
                                    <span>Zavřeno</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 0 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Neděle:</span>
                                    <span>Zavřeno</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
