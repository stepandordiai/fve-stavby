"use client";

import { useState } from "react";
import contacts from "@/data/contacts.json";
import handleCopy from "@/utils/handleCopy";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const workingHours = [
	{ name: "contacts.mon", hours: "8:00 - 17:00" },
	{ name: "contacts.tue", hours: "8:00 - 17:00" },
	{ name: "contacts.wed", hours: "8:00 - 17:00" },
	{ name: "contacts.thu", hours: "8:00 - 17:00" },
	{ name: "contacts.fri", hours: "8:00 - 17:00" },
	{ name: "contacts.sat", hours: "8:00 - 17:00" },
	{ name: "contacts.sun" },
];

export default function ContactsClient() {
	const t = useTranslations();

	const [email, setEmail] = useState("");

	const dayNow = new Date().getDay();
	const dayCorrectIndex = dayNow === 0 ? 6 : dayNow - 1;
	return (
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
							className={classNames("email", {
								"email--correct": email.includes("@"),
								"email--incorrect": email.length > 0 && !email.includes("@"),
							})}
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
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 17L17 7M17 7H8M17 7V16"
								stroke="currentColor"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
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
						<a
							className="contact-details__link"
							href={`tel:${contacts.tel.replaceAll(" ", "")}`}
						>
							{contacts.tel}
						</a>
					</div>
					<div className="contact-details">
						<p className="contact-details__title">E-mail</p>
						<a
							className="contact-details__link"
							href={`mailto:${contacts.email}`}
						>
							{contacts.email}
						</a>
					</div>
					<div className="contact-details">
						<p className="contact-details__title">
							{t("contacts.address_office")}
						</p>
						<a
							className="contact-details__link"
							href={contacts.officeAddressUrl}
							target="_blank"
						>
							{contacts.officeAddress}
						</a>
					</div>
					<div className="contact-details">
						<p className="contact-details__title">
							{t("contacts.address_company")}
						</p>
						<a
							className="contact-details__link"
							href={contacts.companyAddressUrl}
							target="_blank"
						>
							{contacts.companyAddress}
						</a>
					</div>
					<div className="contact-details">
						<p className="contact-details__title">Identifikační číslo</p>
						<button
							className="contacts__copy-btn"
							onClick={(e) => handleCopy(e, ".contacts__copy-btn", t("copied"))}
							title={t("copy")}
						>
							{contacts.companyNumber}
						</button>
					</div>
					<div className="contact-details">
						<p className="contact-details__title">
							{t("contacts.working_hours")}
						</p>
						<ul className="working-hours__list">
							{workingHours.map((day, index) => {
								return (
									<li
										key={index}
										className={classNames("working-hours__item", {
											"working-hours__item--active": dayCorrectIndex === index,
										})}
									>
										<span>{t(day.name)}:</span>
										<span>{day.hours ? day.hours : t("contacts.closed")}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
