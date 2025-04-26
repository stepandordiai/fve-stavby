import { useEffect, useRef } from "react";
import i18next from "i18next";
import "./LngSelect.scss";

const LngSelect = () => {
	const lngSelect = useRef(null);

	function getStorage() {
		return localStorage.getItem("i18nextLng") || "cs";
	}

	const handleLanguage = (lng) => {
		i18next.changeLanguage(lng);
		getStorage();
	};

	function toogleLngSelect() {
		lngSelect.current.classList.toggle("lng-select--active");
		document
			.querySelector(".lng-select__btn")
			.classList.toggle("lng-select__btn--active");
		document
			.querySelector(".lng-select__dd")
			.classList.toggle("lng-select__dd--active");
	}

	useEffect(() => {
		const lngSelectBtn = document.querySelector(".lng-select__btn");
		const lngSelectOptions = document.querySelectorAll(".lng-select__option");
		lngSelectOptions.forEach((option) => {
			option.addEventListener("click", () => {
				handleLanguage(option.dataset.value);
				// document.querySelector(".lng-select__btn").textContent =
				// 	option.dataset.value.toUpperCase();
				for (let i = 0; i < lngSelectOptions.length; i++) {
					lngSelectOptions[i].classList.remove("lng-select__option--active");
				}
				lngSelectBtn.innerHTML = option.innerHTML.slice(0, 2);
				lngSelect.current.classList.remove("lng-select--active");

				lngSelectBtn.classList.remove("lng-select__btn--active");
				document
					.querySelector(".lng-select__dd")
					.classList.remove("lng-select__dd--active");
				if (option.dataset.value === getStorage()) {
					option.classList.add("lng-select__option--active");
				}
			});
		});

		const lngOptions = document.querySelectorAll(".lng-select__option");

		document.addEventListener("click", (e) => {
			if (
				e.target != document.querySelector(".lng-select__dd") &&
				e.target != document.querySelector(".lng-select") &&
				e.target != document.querySelector(".lng-select__btn") &&
				e.target != lngOptions[0] &&
				e.target != lngOptions[1] &&
				e.target != lngOptions[2]
			) {
				lngSelect.current.classList.remove("lng-select--active");
				document
					.querySelector(".lng-select__btn")
					.classList.remove("lng-select__btn--active");
				document
					.querySelector(".lng-select__dd")
					.classList.remove("lng-select__dd--active");
			}
		});

		const handleLngSelectBtn = (code = "CZ") => {
			return code;
		};

		switch (getStorage()) {
			case "uk":
				document.querySelector(".lng-select__btn").innerHTML =
					handleLngSelectBtn("UA");
				break;
			case "en":
				document.querySelector(".lng-select__btn").innerHTML =
					handleLngSelectBtn("EN");
				break;
			case "cs":
				document.querySelector(".lng-select__btn").innerHTML =
					handleLngSelectBtn("CZ");
				break;
		}
	}, []);

	return (
		<>
			<button onClick={toogleLngSelect} className="lng-select__btn">
				CZ
			</button>
			<div ref={lngSelect} className="lng-select">
				<ul className="lng-select__dd">
					<li
						className={
							getStorage() == "cs"
								? "lng-select__option lng-select__option--active"
								: "lng-select__option"
						}
						data-value="cs"
					>
						CZ - Cestina
					</li>
					<li
						className={
							getStorage() == "uk"
								? "lng-select__option lng-select__option--active"
								: "lng-select__option"
						}
						data-value="uk"
					>
						UA - Українська
					</li>
					<li
						className={
							getStorage() == "en"
								? "lng-select__option lng-select__option--active"
								: "lng-select__option"
						}
						data-value="en"
					>
						EN - English
					</li>
				</ul>
			</div>
		</>
	);
};

export default LngSelect;
