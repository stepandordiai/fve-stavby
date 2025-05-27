import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useState, useEffect } from "react";
import handleCopy from "../../utils/handleCopy";
import arrow from "/icons/arrow-upper-right-white.png";
import img from "/img/14.jpg";
import "./../../global/LinkEffect.scss";
import "./Contacts.scss";

const Contacts = () => {
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
				<meta
					name="description"
					content="Visit or contact us for more information. See our location, phone number, and working hours on the Contacts page."
				/>
				<title>FVE STAVBY | {t("contacts_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/contacts" />
			</Helmet>
			<PageTitle title={t("contacts_title")} img={img} />
			<div className="contacts">
				<div className="contacts-left-container">
					<h2 className="contacts-left-container__title">
						{t("contacts.contact_us")}
					</h2>
					<form
						action="https://formsubmit.co/info@fvestavby.cz"
						method="post"
						autoComplete="on"
					>
						<div className="input-container">
							<input
								name="firstName"
								autoComplete="given-name"
								type="text"
								placeholder={t("contacts.first_name")}
							/>
							<input
								name="lastName"
								autoComplete="family-name"
								type="text"
								placeholder={t("contacts.last_name")}
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
								placeholder={t("tel")}
							/>
						</div>
						<textarea
							name="message"
							autoComplete="on"
							placeholder={t("contacts.message")}
						/>
						<button className="form-btn" type="submit">
							<span>{t("contacts.submit")}</span>
							<img className="form-btn__icon" src={arrow} alt="" />
						</button>
					</form>
				</div>
				<div className="contacts-right-container">
					<h2 className="contacts-right-container__title">
						{t("contacts.contact_details")}
					</h2>
					<div className="contact-details-container">
						<div className="contact-details">
							<p className="contact-details__title">{t("tel")}</p>
							<a className="contact-details__link" href="tel:+420777957290">
								+420 777 957 290
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
							<p className="contact-details__title">
								{t("contacts.address_office")}
							</p>
							<a
								className="contact-details__link"
								href="https://maps.app.goo.gl/UBXCPbrrCNxUSXNY8"
								target="_blank"
							>
								Pod Hroby 271 Kolín IV
							</a>
						</div>
						<div className="contact-details">
							<p className="contact-details__title">
								{t("contacts.address_company")}
							</p>
							<a
								className="contact-details__link"
								href="https://maps.app.goo.gl/56b3G1KEn5RwGfdW7"
								target="_blank"
							>
								Krocínova 333/3, Staré Město, 110 00 Praha 1
							</a>
						</div>
						<div className="contact-details">
							<p className="contact-details__title">Identifikační číslo</p>
							<button
								className="contacts__copy-btn"
								onClick={(e) => handleCopy(e, ".contacts__copy-btn")}
							>
								23287179
							</button>
						</div>
						<div className="contact-details">
							<p className="contact-details__title">
								{t("contacts.working_hours")}
							</p>
							<ul className="business-hours__list">
								<li className={dayNow === 1 ? activeDay : inactiveDay}>
									<span>{t("contacts.mon")}:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 2 ? activeDay : inactiveDay}>
									<span>{t("contacts.tue")}:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 3 ? activeDay : inactiveDay}>
									<span>{t("contacts.wed")}:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 4 ? activeDay : inactiveDay}>
									<span>{t("contacts.thu")}:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 5 ? activeDay : inactiveDay}>
									<span>{t("contacts.fri")}:</span>
									<span>8:00 - 17:00</span>
								</li>
								<li className={dayNow === 6 ? activeDay : inactiveDay}>
									<span>{t("contacts.sat")}:</span>
									<span>{t("contacts.closed")}</span>
								</li>
								<li className={dayNow === 0 ? activeDay : inactiveDay}>
									<span>{t("contacts.sun")}:</span>
									<span>{t("contacts.closed")}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
