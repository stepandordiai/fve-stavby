import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useRouter, usePathname } from "next/navigation";
import "./LngSelect.scss";

interface Language {
	code: string;
	name: string;
	fullName: string;
}

const lngData: Language[] = [
	{ code: "cs", name: "CZ", fullName: "Čeština" },
	{ code: "en", name: "EN", fullName: "English" },
];

const LngSelect = () => {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const lngSelect = useRef<HTMLDivElement | null>(null);
	const lngSelectBtn = useRef<HTMLButtonElement | null>(null);

	const [lngSelectActive, setLngSelectActive] = useState(false);

	const toggleLngSelectBtn = () => setLngSelectActive((prev) => !prev);

	const currentLng = lngData.find((lng) => lng.code === locale) || lngData[0];

	const handleLngSelectOption = (lng: Language) => {
		const newPathname = pathname.replace(`/${locale}`, `/${lng.code}`);
		router.replace(newPathname);

		setLngSelectActive(false);
	};

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
				aria-expanded={lngSelectActive}
				aria-controls="lng-select"
			>
				{currentLng.name}
			</button>
			<div
				ref={lngSelect}
				className={classNames("lng-select", {
					"lng-select--active": lngSelectActive,
				})}
				id="lng-select"
				hidden={!lngSelectActive}
			>
				<ul
					className={classNames("lng-select__dd", {
						"lng-select__dd--active": lngSelectActive,
					})}
				>
					{lngData.map((lng) => {
						return (
							<li
								onClick={() => handleLngSelectOption(lng)}
								key={lng.code}
								className={classNames("lng-select__option", {
									"lng-select__option--active": currentLng.code === lng.code,
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
