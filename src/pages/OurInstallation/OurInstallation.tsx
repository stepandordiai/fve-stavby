import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import isTouchDevice from "../../utils/isTouchDevice";
import Container from "../../components/Container/Container";
import img from "/img/08-c.jpg";
import closeIcon from "/icons/close-white.png";
import expandIcon from "/icons/expand-white.png";
import shrinkIcon from "/icons/shrink-white.png";
import leftArrowIcon from "/icons/left-arrow.png";
import rightArrowIcon from "/icons/right-arrow.png";
import "./OurInstallation.scss";

const OurInstallation = () => {
	const { t } = useTranslation();

	// TODO:
	const imgCardRefs = useRef<(HTMLDivElement | null)[]>([]);

	interface InstallationData {
		id: number;
		img: string;
	}

	const installationsData: InstallationData[] = [
		{
			id: 1,
			img: "/installations/01-c.jpeg",
		},
		{
			id: 2,
			img: "/installations/02-c.jpeg",
		},
		{
			id: 3,
			img: "/installations/03-c.jpeg",
		},
		{
			id: 4,
			img: "/installations/04-c.jpeg",
		},
		{
			id: 5,
			img: "/installations/05-c.jpeg",
		},
		{
			id: 6,
			img: "/installations/06-c.jpeg",
		},
		{
			id: 7,
			img: "/installations/07-c.jpeg",
		},
		{
			id: 8,
			img: "/installations/08-c.jpeg",
		},
		{
			id: 9,
			img: "/installations/09-c.jpeg",
		},
		{
			id: 10,
			img: "/installations/10-c.jpeg",
		},
		{
			id: 11,
			img: "/installations/11-c.jpeg",
		},
	];

	// TODO:
	const [isInView, setIsInView] = useState(() =>
		new Array(installationsData.length).fill(false)
	);

	useEffect(() => {
		document
			.querySelectorAll(".our-installation__card img")
			.forEach((img, index) => {
				img.addEventListener("click", () => {
					if (index + 1 === installationsData[index].id) {
						// Create elements
						const fullScreen = document.createElement("div") as HTMLElement;
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

						function currentSlide(n: number) {
							handleSlider((slideIndex = n));
						}

						currentSlide(index);

						function increaseSlider(n: number) {
							handleSlider((slideIndex += n));
						}

						function handleSlider(n: number) {
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
							if (fullScreenBtn.querySelector("img")?.src.includes("expand")) {
								if ((fullScreen as any).requestFullScreen) {
									(fullScreen as any).requestFullScreen();
								} else if ((fullScreen as any).mozRequestFullScreen) {
									(fullScreen as any).mozRequestFullScreen();
								} else if ((fullScreen as any).webkitRequestFullScreen) {
									(fullScreen as any).webkitRequestFullScreen();
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

		// TODO: FIX
		if (!imgCardRefs.current.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = imgCardRefs.current.indexOf(
						entry.target as HTMLDivElement
					);
					if (index !== -1 && entry.isIntersecting) {
						setIsInView((prev) => {
							if (prev[index]) return prev; // already visible, skip re-render
							const updated = [...prev];
							updated[index] = true;
							return updated;
						});
					}
				});
			},
			{ threshold: 0 }
		);

		imgCardRefs.current.forEach((card) => {
			if (card) observer.observe(card);
		});

		// TODO:
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Helmet>
				<meta name="description" content={t("our_installation_seo_desc")} />
				<title>{t("our_installation_title")} | FVE STAVBY</title>
				<link
					rel="canonical"
					href="https://www.fvestavby.cz/our-installation"
				/>
			</Helmet>
			<main>
				<Container>
					<PageTitle title={t("our_installation_title")} img={img} />
					<div className="our-installation">
						<p className="our-installation__title">
							{t("our_installation_desc")}
						</p>
						<div className="our-installation__grid">
							{installationsData.map(({ id, img }, index) => {
								return (
									<div
										// TODO:
										ref={(el) => {
											imgCardRefs.current[index] = el;
										}}
										key={id}
										className="our-installation__card-wrapper"
									>
										<div
											className={`our-installation__card ${
												isInView[index] ? "inner-card--active" : ""
											}`}
										>
											<img
												className={isInView[index] ? "card-img--active" : ""}
												src={img}
												alt="FVE STAVBY Installation"
												loading="lazy"
											/>
										</div>
									</div>
								);
							})}
						</div>
						<GetInTouch />
					</div>
				</Container>
			</main>
		</>
	);
};

export default OurInstallation;
