import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import addressIcon from "./../../assets/icons/address.png";
import "./Contacts.scss";

const ContactUs = () => {
    return (
        <>
            <div className="page-title">
                <p className="page-title__title">Contact us</p>
            </div>
            <div className="contact-us">
                <p>CONTACTS DETAILS</p>
                <p>
                    Leave your contact details right there and we will call you
                    via 15 min
                </p>
                <div className="contacts-details-wrapper">
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
                            id=""
                            // cols="30"
                            // rows="10"
                            placeholder="Message"
                        ></textarea>
                        <button className="form-btn" type="submit">
                            <span>Odeslat</span>
                            <img className="form-btn-icon" src={arrow} alt="" />
                        </button>
                    </form>
                    <div className="contacts-details">
                        <div className="contacts-link-container">
                            <p className="contacts-link-title">
                                <img src={phoneIcon} alt="" />
                                <span>Phone number</span>
                            </p>
                            <a
                                className="contacts-link"
                                href="tel:+420728803703"
                            >
                                +420 728 803 703
                            </a>
                        </div>
                        <div className="contacts-link-container">
                            <p className="contacts-link-title">
                                <img src={mailIcon} alt="" />
                                <span>E-mail</span>
                            </p>
                            <a
                                className="contacts-link"
                                href="mailto:obchod@fvestavby.cz"
                            >
                                obchod@fvestavby.cz
                            </a>
                        </div>
                        <div className="contacts-link-container">
                            <p className="contacts-link-title">
                                <img src={addressIcon} alt="" />
                                <span>Address</span>
                            </p>
                            <a
                                className="contacts-link"
                                href="mailto:obchod@fvestavby.cz"
                            >
                                <mark>
                                    Nad Kamínkou 1563, Zbraslav, 156 00 Praha 5
                                </mark>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
