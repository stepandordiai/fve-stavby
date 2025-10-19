import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useState } from "react";
import handleCopy from "../../utils/handleCopy";
import Container from "../../components/Container/Container";
import arrow from "/icons/arrow-upper-right-white.png";
import img from "/img/09-c.jpg";
import "./Contacts.scss";

const Contacts = () => {
	const { t } = useTranslation();

	const [email, setEmail] = useState("");

	const dayNow = new Date().getDay();

	const dayCorrectIndex = dayNow === 0 ? 6 : dayNow - 1;

	const workingHoursData = [
		{ name: "contacts.mon", hours: "8:00 - 17:00" },
		{ name: "contacts.tue", hours: "8:00 - 17:00" },
		{ name: "contacts.wed", hours: "8:00 - 17:00" },
		{ name: "contacts.thu", hours: "8:00 - 17:00" },
		{ name: "contacts.fri", hours: "8:00 - 17:00" },
		{ name: "contacts.sat", hours: "8:00 - 17:00" },
		{ name: "contacts.sun", hours: "contacts.closed" },
	];

	return (
		<>
			<Helmet>
				<meta name="description" content={t("contacts_seo_desc")} />
				<title>{t("contacts_title")} | FVE STAVBY</title>
				<link rel="canonical" href="https://www.fvestavby.cz/contacts" />
			</Helmet>
			<main>
				<Container>
					<PageTitle title={t("contacts_title")} img={img} />
					<div className="contacts">
						<div className="contacts-left-container">
							<h2 className="contacts-left-container__title">
								{t("contacts.contact_us")}
							</h2>
							<form
								action="https://formspree.io/f/mqalzwov"
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
										className={`email ${
											email.includes("@")
												? "email--correct"
												: email.length > 0
												? "email--incorrect"
												: ""
										}`}
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
										placeholder={`${t("tel")} (${t("required")})`}
										required
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
										onClick={(e) =>
											handleCopy(e, ".contacts__copy-btn", t("copied"))
										}
										title={t("copy")}
									>
										23287179
									</button>
								</div>
								<div className="contact-details">
									<p className="contact-details__title">
										{t("contacts.working_hours")}
									</p>
									<ul className="working-hours__list">
										{workingHoursData.map((day, index) => {
											return (
												<li
													key={index}
													className={`working-hours__item ${
														dayCorrectIndex === index
															? "working-hours__item--active"
															: ""
													}`}
												>
													<span>{t(day.name)}:</span>
													<span>{t(day.hours)}</span>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default Contacts;
