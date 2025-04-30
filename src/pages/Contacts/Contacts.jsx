import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useState, useEffect } from "react";
import arrow from "/assets/icons/arrow-upper-right-white.png";
import img from "/assets/img/14.jpg";
import "./../../global/LinkEffect.scss";
import "./Contacts.scss";

const ContactUs = () => {
	const { t } = useTranslation();

	const dateNow = new Date();
	const dayNow = dateNow.getDay();

	const inactiveDay = "business-hours__item";
	const activeDay = "business-hours__item business-hours__item--active";

	const [email, setEmail] = useState("");

	useEffect(() => {
		if (email.length === 0) {
			document.querySelector(".email").classList.remove("email--correct");
			document.querySelector(".email").classList.remove("email--incorrect");
		}
		if (email.includes("@")) {
			document.querySelector(".email").classList.remove("email--incorrect");
			document.querySelector(".email").classList.add("email--correct");
		} else if (!email.includes("@") && email.length > 0) {
			document.querySelector(".email").classList.remove("email--correct");
			document.querySelector(".email").classList.add("email--incorrect");
		}
	}, [email]);

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("contacts_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/contacts" />
			</Helmet>
			<PageTitle title={t("contacts_title")} img={img} />
			<div className="contacts">
				<div className="contacts-left-container">
					<h2 className="contacts-left-container__title">Kontaktujte nás</h2>
					<form
						className="form"
						action="https://formsubmit.co/info@fvestavby.cz"
						method="post"
						autoComplete="on"
					>
						<div className="input-container">
							<input
								name="firstName"
								autoComplete="given-name"
								type="text"
								placeholder="Jméno"
							/>
							<input
								name="lastName"
								autoComplete="family-name"
								type="text"
								placeholder="Příjmení"
							/>
						</div>
						<div className="input-container">
							<input
								className="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								autoComplete="email"
								type="email"
								placeholder="E-mail"
							/>
							<input
								name="tel"
								autoComplete="tel"
								type="tel"
								placeholder="Telefonní číslo"
							/>
						</div>
						<textarea name="message" autoComplete="on" placeholder="Zpráva" />
						<button className="form-btn" type="submit">
							<span>Odeslat</span>
							<img className="form-btn__icon" src={arrow} alt="" />
						</button>
					</form>
				</div>
				<div className="contacts-right-container">
					<h2 className="contacts-right-container__title">Kontaktní údaje</h2>
					<div className="contact-details-container">
						<div className="contact-details">
							<p className="contact-details__title">Telefonní číslo</p>
							<a className="contact-details__link" href="tel:+420728803703">
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
							<p className="contact-details__title">Adresa kanceláře</p>
							<a
								className="contact-details__link"
								href="https://maps.app.goo.gl/B8QvEwaqziXBAe776"
							>
								Pod Hroby 271 Kolín IV
							</a>
						</div>
						<div className="contact-details">
							<p className="contact-details__title">Adresa společnosti</p>
							<a
								className="contact-details__link"
								href="https://maps.app.goo.gl/EsrX5bSfKpw8GprZ9"
							>
								Lidická 700/19 Brno
							</a>
						</div>
						<div className="contact-details">
							<p className="contact-details__title">Pracovní doba</p>
							<ul className="business-hours__list">
								<li className={dayNow === 1 ? activeDay : inactiveDay}>
									<span>Pondělí:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 2 ? activeDay : inactiveDay}>
									<span>Úterý:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 3 ? activeDay : inactiveDay}>
									<span>Středa:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 4 ? activeDay : inactiveDay}>
									<span>Čtvrtek:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 5 ? activeDay : inactiveDay}>
									<span>Pátek:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 6 ? activeDay : inactiveDay}>
									<span>Sobota:</span>
									<span>Zavřeno</span>
								</li>
								<li className={dayNow === 0 ? activeDay : inactiveDay}>
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
