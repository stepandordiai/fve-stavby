import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import isTouchDevice from "../../utils/isTouchDevice";
import img from "/assets/img/5.jpg";
import closeIcon from "/assets/icons/close-white.png";
import expandIcon from "/assets/icons/expand-white.png";
import shrinkIcon from "/assets/icons/shrink-white.png";
import leftArrowIcon from "/assets/icons/left-arrow.png";
import rightArrowIcon from "/assets/icons/right-arrow.png";
import "./OurInstallation.scss";

const OurInstallation = () => {
	const { t } = useTranslation();

	const installationsData = [
		{
			id: 1,
			img: "/assets/installations/01.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 2,
			img: "/assets/installations/02.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 3,
			img: "/assets/installations/03.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 4,
			img: "/assets/installations/04.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 5,
			img: "/assets/installations/05.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 6,
			img: "/assets/installations/06.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 7,
			img: "/assets/installations/07.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 8,
			img: "/assets/installations/08.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 9,
			img: "/assets/installations/09.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 10,
			img: "/assets/installations/10.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
		{
			id: 11,
			img: "/assets/installations/11.jpeg",
			installationDate: "18.03.2025",
			description: "Černá Voda, 24x Trina Solar 450, 10.8kWp",
		},
	];

	// const [slide, setSlide] = useState(0);

	useEffect(() => {
		document
			.querySelectorAll(".our-installation__card img")
			.forEach((img, index) => {
				img.addEventListener("click", () => {
					if (index + 1 === installationsData[index].id) {
						// Create elements
						const fullScreen = document.createElement("div");
						const fullScreenLeftArrow = document.createElement("button");
						const fullScreenRightArrow = document.createElement("button");
						const fullScreenHeader = document.createElement("header");
						const fullScreenCloseBtn = document.createElement("button");
						const fullScreenImage = document.createElement("img");
						const fullScreenFooter = document.createElement("footer");
						const fullScreenBtn = document.createElement("button");

						// Add classNames for elements
						fullScreen.classList.add("full-screen-div");
						fullScreenLeftArrow.classList.add("full-screen__left-arrow");
						fullScreenRightArrow.classList.add("full-screen__right-arrow");
						fullScreenHeader.classList.add("full-screen-header");
						fullScreenCloseBtn.classList.add("full-screen__close-btn");
						fullScreenImage.classList.add("full-screen-image");
						fullScreenFooter.classList.add("full-screen-footer");

						if (!isTouchDevice()) {
							fullScreenBtn.classList.add("full-screen__btn");
						} else {
							fullScreenBtn.classList.add("full-screen__btn--hide");
						}

						fullScreenLeftArrow.innerHTML = `<img title="Left" src="${leftArrowIcon}" loading="lazy" />`;
						fullScreenRightArrow.innerHTML = `<img title="Right" src="${rightArrowIcon}" loading="lazy" />`;
						fullScreenCloseBtn.innerHTML = `<img title="Close" src="${closeIcon}" alt="Close icon" loading="lazy" />`;
						fullScreenBtn.innerHTML = `<img title="Expand" src="${expandIcon}" alt="Expand icon" loading="lazy" />`;

						let slideIndex = 1;

						function currentSlide(n) {
							handleSlider((slideIndex = n));
						}

						currentSlide(index);

						function increaseSlider(n) {
							handleSlider((slideIndex += n));
						}

						function handleSlider(n) {
							if (slideIndex == installationsData.length) {
								slideIndex = 0;
							}
							if (slideIndex < 0) {
								slideIndex = installationsData.length - 1;
							}
							fullScreenImage.src = installationsData[slideIndex].img;
						}

						fullScreenLeftArrow.addEventListener("click", () => {
							increaseSlider(-1);
						});

						fullScreenRightArrow.addEventListener("click", () => {
							increaseSlider(1);
						});

						fullScreenCloseBtn.addEventListener("click", () => {
							fullScreen.remove();
						});

						fullScreenBtn.addEventListener("click", () => {
							if (fullScreenBtn.querySelector("img").src.includes("expand")) {
								if (fullScreen.requestFullScreen) {
									fullScreen.requestFullScreen();
								} else if (fullScreen.mozRequestFullScreen) {
									fullScreen.mozRequestFullScreen();
								} else if (fullScreen.webkitRequestFullScreen) {
									fullScreen.webkitRequestFullScreen();
								}
								fullScreenBtn.innerHTML = `<img title="Shrink" src="${shrinkIcon}" alt="Shrink icon" loading="lazy" />`;
							} else {
								document.exitFullscreen();
								fullScreenBtn.innerHTML = `<img title="Expand" src="${expandIcon}" alt="Expand icon" loading="lazy" />`;
							}
						});

						// Append elements
						document.body.appendChild(fullScreen);
						fullScreen.append(
							fullScreenLeftArrow,
							fullScreenRightArrow,
							fullScreenHeader,
							fullScreenImage,
							fullScreenFooter
						);
						fullScreenHeader.appendChild(fullScreenCloseBtn);
						fullScreenFooter.appendChild(fullScreenBtn);
					}
				});
			});

		// Specify width for each card white background in case if date bigger or smaller
		const dateElements = document.querySelectorAll(
			".our-installation__card-date-info"
		);
		const behindDateElements = document.querySelectorAll(
			".behind-date-element"
		);

		dateElements.forEach((dateElement, index) => {
			behindDateElements[index].style.width = `${
				dateElement.offsetWidth + 10
			}px`;
		});

		document
			.querySelectorAll(".our-installation__card-wrapper")
			.forEach((card, index) => {
				let isUsed = false;
				document.addEventListener("scroll", () => {
					const cardRect = card.getBoundingClientRect();
					if (cardRect.top < window.innerHeight) {
						if (!isUsed) {
							const innerCard = document.querySelectorAll(
								".our-installation__card"
							);
							const cardImg = document.querySelectorAll(
								".our-installation__card img"
							);

							innerCard[index].classList.add("inner-card--active");
							cardImg[index].classList.add("card-img--active");
						}
						isUsed = true;
					}
				});

				const cardRect = card.getBoundingClientRect();

				if (cardRect.top < window.innerHeight) {
					const innerCard = document.querySelectorAll(
						".our-installation__card"
					);
					const cardImg = document.querySelectorAll(
						".our-installation__card img"
					);

					innerCard[index].classList.add("inner-card--active");
					cardImg[index].classList.add("card-img--active");
				}
			});
	}, []);

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("our_installation_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/our-installation" />
			</Helmet>
			<PageTitle title={"Naše instalace"} img={img} />
			<section className="our-installation">
				<p className="our-installation__title">
					Na spokojenosti našich zákazníků nám záleží. Zde si můžete prohlédnout
					některé z našich instalací fotovoltaických elektráren. Pokud vás
					nějaká ze zhotovených instalací zaujala, neváhejte nás kontaktovat
				</p>
				<div className="our-installation__grid">
					{installationsData.map(({ id, img, description }) => {
						return (
							<div key={id} className="our-installation__card-wrapper">
								<div className="our-installation__card">
									<img src={img} alt={description} />
								</div>
							</div>
						);
					})}
				</div>
				<GetInTouch />
			</section>
		</>
	);
};

export default OurInstallation;
