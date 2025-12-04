import { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import classNames from "classnames";
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
				className={classNames("lng-select__btn", {
					"lng-select__btn--active": lngSelectActive,
				})}
			>
				{lngSelectName}
			</button>
			<div
				ref={lngSelect}
				className={classNames("lng-select", {
					"lng-select--active": lngSelectActive,
				})}
			>
				<ul
					className={classNames("lng-select__dd", {
						"lng-select__dd--active": lngSelectActive,
					})}
				>
					{lngData.map((lng) => {
						return (
							<li
								onClick={() => handleLngSelectOption(lng.code)}
								key={lng.code}
								className={classNames("lng-select__option", {
									"lng-select__option--active": lngSelectOption === lng.code,
								})}
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
