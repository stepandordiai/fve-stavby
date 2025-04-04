import "./LngSelect.scss";
import { useEffect, useRef } from "react";

const LngSelect = () => {
    const lngSelect = useRef(null);

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
        document.querySelectorAll(".lng-select__option").forEach((option) => {
            option.addEventListener("click", () => {
                document.querySelector(".lng-select__btn").textContent =
                    option.dataset.value.toUpperCase();
            });
        });
    }, []);

    return (
        <>
            <button onClick={toogleLngSelect} className="lng-select__btn">
                CZ
            </button>
            <div ref={lngSelect} className="lng-select">
                <ul className="lng-select__dd">
                    <li className="lng-select__option" data-value="cz">
                        CZ - Cestina
                    </li>
                    <li className="lng-select__option" data-value="ua">
                        UA - Українська
                    </li>
                    <li className="lng-select__option" data-value="en">
                        EN - English
                    </li>
                </ul>
            </div>
        </>
    );
};

export default LngSelect;
