import arrow from "./../../assets/icons/arrow-upper-right-white.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import addressIcon from "./../../assets/icons/address.png";
import "./ContactUs.scss";

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
                    <form className="form" action="">
                        <div className="input-container">
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                        </div>
                        <div className="input-container">
                            <input type="email" placeholder="E-mail" />
                            <input type="tel" placeholder="Phone number" />
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
                            name=""
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
                            <a className="contacts-link" href="tel:">
                                +420722001016
                            </a>
                        </div>
                        <div className="contacts-link-container">
                            <p className="contacts-link-title">
                                <img src={mailIcon} alt="" />
                                <span>E-mail</span>
                            </p>
                            <a
                                className="contacts-link"
                                href="mailto: tomas.maliga@fvestavby.cz"
                            >
                                tomas.maliga@fvestavby.cz
                            </a>
                        </div>
                        <div className="contacts-link-container">
                            <p className="contacts-link-title">
                                <img src={addressIcon} alt="" />
                                <span>Address</span>
                            </p>
                            <a
                                className="contacts-link"
                                href="mailto: tomas.maliga@fvestavby.cz"
                            >
                                Nad Kamínkou 1563, Zbraslav, 156 00 Praha 5
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
