import "./BurgerBtn.scss";

const BurgerBtn = () => {
	function toggleBurgerBtn(): void {
		const burgerBtn = document.querySelector(
			".burger-btn"
		) as HTMLDivElement | null;
		const burgerBtnCenterLine = document.querySelector(
			".burger-btn__center-line"
		) as HTMLSpanElement | null;
		const menu = document.querySelector(".menu") as HTMLDivElement | null;
		const menuWrapper = document.querySelector(
			".menu-wrapper"
		) as HTMLDivElement | null;
		const headerBottom = document.querySelector(
			".header-bottom"
		) as HTMLDivElement | null;

		burgerBtn?.classList.toggle("burger-btn--active");
		burgerBtnCenterLine?.classList.toggle("burger-btn__center-line--active");
		menu?.classList.toggle("menu--active");
		menuWrapper?.classList.toggle("menu-wrapper--active");
		headerBottom?.classList.toggle("header-bottom--hide");
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
