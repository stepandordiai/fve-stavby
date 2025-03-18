import "./BurgerBtn.scss";

const BurgerBtn = () => {
    function toggleBurgerBtn() {
        document
            .querySelector(".burger-btn")
            .classList.toggle("burger-btn--active");
        document
            .querySelector(".burger-btn__center-line")
            .classList.toggle("burger-btn__center-line--active");

        document.querySelector(".menu").classList.toggle("menu--active");
        document
            .querySelector(".menu-wrapper")
            .classList.toggle("menu-wrapper--active");
    }
    return (
        <div onClick={toggleBurgerBtn} className="burger-btn-wrapper">
            <div className="burger-btn">
                <span className="burger-btn__center-line"></span>
            </div>
        </div>
    );
};

export default BurgerBtn;
