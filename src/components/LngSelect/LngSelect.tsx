import { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import "./LngSelect.scss";

const lngData = [
	{ code: "cs", name: "CZ", fullName: "Čeština" },
	{ code: "en", name: "EN", fullName: "English" },
];

function getStorage() {
	return localStorage.getItem("i18nextLng") || "cs";
}

const LngSelect = () => {
	const lngSelect = useRef<HTMLDivElement | null>(null);
	const lngSelectBtn = useRef<HTMLButtonElement | null>(null);

	const [lngSelectActive, setLngSelectActive] = useState(false);
	const [lngSelectOption, setLngSelectOption] = useState(getStorage());
	const [lngSelectName, setLngSelectName] = useState(lngData[0].name);

	const toggleLngSelectBtn = () => setLngSelectActive((prev) => !prev);

	const handleLngSelectOption = (code: string) => {
		i18next.changeLanguage(code);
		setLngSelectOption(code);
		setLngSelectActive(false);
	};

	useEffect(() => {
		const storedLng = getStorage();
		const foundLng = lngData.find((lng) => lng.code === storedLng);

		setLngSelectName(foundLng ? foundLng.name : lngData[0].name);
	}, [getStorage()]);

	useEffect(() => {
		const handleClickNotOnLngSelect = (e: MouseEvent | TouchEvent) => {
			const targetElement = e.target as Node;

			if (
				lngSelect.current &&
				!lngSelect.current.contains(targetElement) &&
				lngSelectBtn.current &&
				!lngSelectBtn.current.contains(targetElement)
			) {
				setLngSelectActive(false);
			}
		};

		document.addEventListener("click", handleClickNotOnLngSelect);

		return () =>
			document.removeEventListener("click", handleClickNotOnLngSelect);
	}, []);

	return (
		<>
			<button
				ref={lngSelectBtn}
				onClick={toggleLngSelectBtn}
				className={`lng-select__btn ${
					lngSelectActive ? "lng-select__btn--active" : ""
				}`}
			>
				{lngSelectName}
			</button>
			<div
				ref={lngSelect}
				className={`lng-select ${lngSelectActive ? "lng-select--active" : ""}`}
			>
				<ul
					className={`lng-select__dd ${
						lngSelectActive ? "lng-select__dd--active" : ""
					}`}
				>
					{lngData.map((lng) => {
						return (
							<li
								onClick={() => handleLngSelectOption(lng.code)}
								key={lng.code}
								className={`lng-select__option ${
									lngSelectOption === lng.code
										? " lng-select__option--active"
										: ""
								}`}
							>
								{`${lng.name} - ${lng.fullName}`}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default LngSelect;
