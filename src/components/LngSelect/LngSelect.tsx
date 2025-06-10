import { useEffect, useRef } from "react";
import i18next from "i18next";
import "./LngSelect.scss";

const LngSelect = () => {
	const lngSelect = useRef<HTMLDivElement | null>(null);
	const lngSelectBtn = document.querySelector(
		".lng-select__btn"
	) as HTMLButtonElement | null;
	const lngSelectDd = document.querySelector(
		".lng-select__dd"
	) as HTMLUListElement;
	const lngSelectOptions = document.querySelectorAll(
		".lng-select__option"
	) as NodeListOf<HTMLLIElement>;

	function getStorage() {
		return localStorage.getItem("i18nextLng") || "cs";
	}

	const handleLanguage = (lng: string) => {
		i18next.changeLanguage(lng);

		// FIXME:
		getStorage();
	};

	function toogleLngSelect() {
		const lngSelectBtn = document.querySelector(
			".lng-select__btn"
		) as HTMLButtonElement | null;
		const lngSelectDd = document.querySelector(
			".lng-select__dd"
		) as HTMLUListElement;
		if (!lngSelect.current || !lngSelectBtn || !lngSelectDd) return;
		lngSelect.current.classList.toggle("lng-select--active");
		lngSelectBtn?.classList.toggle("lng-select__btn--active");
		lngSelectDd?.classList.toggle("lng-select__dd--active");
	}

	useEffect(() => {
		const lngSelectBtn = document.querySelector(
			".lng-select__btn"
		) as HTMLButtonElement | null;
		const lngSelectDd = document.querySelector(
			".lng-select__dd"
		) as HTMLUListElement;
		const lngSelectOptions = document.querySelectorAll(
			".lng-select__option"
		) as NodeListOf<HTMLLIElement>;
		lngSelectOptions.forEach((option: HTMLLIElement) => {
			option.addEventListener("click", () => {
				handleLanguage(option.dataset?.value || "cs");
				for (let i = 0; i < lngSelectOptions.length; i++) {
					lngSelectOptions[i].classList.remove("lng-select__option--active");
				}
				if (!lngSelectBtn || !lngSelect.current) return;
				lngSelectBtn.innerHTML = option.innerHTML.slice(0, 2);
				lngSelect.current?.classList.remove("lng-select--active");

				lngSelectBtn.classList.remove("lng-select__btn--active");
				lngSelectDd?.classList.remove("lng-select__dd--active");
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
				lngSelect.current?.classList.remove("lng-select--active");
				lngSelectBtn?.classList.remove("lng-select__btn--active");
				lngSelectDd?.classList.remove("lng-select__dd--active");
			}
		});

		const handleLngSelectBtn = (code = "CZ") => {
			return code;
		};

		if (!lngSelectBtn) return;

		switch (getStorage()) {
			case "uk":
				lngSelectBtn.innerHTML = handleLngSelectBtn("UA");
				break;
			case "en":
				lngSelectBtn.innerHTML = handleLngSelectBtn("EN");
				break;
			case "cs":
				lngSelectBtn.innerHTML = handleLngSelectBtn("CZ");
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
						CZ - Čeština
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
