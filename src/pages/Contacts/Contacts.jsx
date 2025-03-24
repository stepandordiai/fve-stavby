import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import { Helmet } from "react-helmet";
import "./Contacts.scss";

const ContactUs = () => {
    const date = new Date();
    const dayNow = date.getDay();

    const inactiveDay = "business-hours__item";
    const activeDay = "business-hours__item business-hours__item--active";

    return (
        <>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <div className="page-title">
                <p className="page-title__title">Contacts</p>
            </div>
            <div className="contacts">
                <div className="contacts-left-container">
                    <p className="contacts-left-container__title">Contact us</p>
                    <form
                        className="form"
                        action="mailto:obchod@fvestavby.cz"
                        method="post"
                        encType="text/plain"
                    >
                        <div className="input-container">
                            <input
                                name="First name"
                                type="text"
                                placeholder="First name"
                            />
                            <input
                                name="Last name"
                                type="text"
                                placeholder="Last name"
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
                                placeholder="Phone number"
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
                            placeholder="Message"
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
                    <p className="contacts-right-container__title">
                        Contact details
                    </p>
                    <div className="contact-details-container">
                        <div className="contact-details">
                            <p className="contact-details__title">
                                Phone number
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
                                href="mailto:obchod@fvestavby.cz"
                            >
                                obchod@fvestavby.cz
                            </a>
                        </div>
                        <div className="contact-details">
                            <p className="contact-details__title">Address</p>
                            <a
                                className="contact-details__link"
                                href="mailto:obchod@fvestavby.cz"
                            >
                                Nad Kamínkou 1563, Zbraslav, 156 00 Praha 5
                            </a>
                        </div>
                        <div className="contact-details">
                            <p className="contact-details__title">
                                Business hours
                            </p>
                            <ul className="business-hours__list">
                                <li
                                    className={
                                        dayNow === 1 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Pondělí:</span>
                                    <span>7:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 2 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Úterý:</span>
                                    <span>7:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 3 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Středa:</span>
                                    <span>7:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 4 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Čtvrtek:</span>
                                    <span>7:00 - 17:00</span>
                                </li>
                                <li
                                    className={
                                        dayNow === 5 ? activeDay : inactiveDay
                                    }
                                >
                                    <span>Pátek:</span>
                                    <span>7:00 - 17:00</span>
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
