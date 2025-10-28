import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Container from "../../components/Container/Container";
import img from "/img/08-c.jpg";
import closeIcon from "/icons/close-white.png";
import expandIcon from "/icons/expand-white.png";
import shrinkIcon from "/icons/shrink-white.png";
import leftArrowIcon from "/icons/left-arrow.png";
import rightArrowIcon from "/icons/right-arrow.png";
import "./OurInstallation.scss";

interface Installation {
	id: number;
	img: string;
}

const installationsData: Installation[] = [
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

const OurInstallation = () => {
	const { t } = useTranslation();

	// TODO:
	const imgCardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const fullScreenRef = useRef<HTMLDivElement | null>(null);

	// TODO:
	const [isInView, setIsInView] = useState(() =>
		new Array(installationsData.length).fill(false)
	);

	const [slider, setSlider] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const [fullScreenActive, setFullScreenActive] = useState(false);

	const showSlider = (index: number) => {
		setSlider(true);
		setImageIndex(index);
		document.body.style.overflow = "hidden";
	};

	const handleSlider = (value: number) => {
		setImageIndex((prev) => {
			const totalLength = installationsData.length;
			let slideIndex = prev + value;
			if (slideIndex >= totalLength) slideIndex = 0;
			if (slideIndex < 0) slideIndex = totalLength - 1;
			return slideIndex;
		});
	};

	const hideSlider = () => {
		setSlider(false);
		document.body.style.overflow = "auto";
	};

	const toggleFullScreenBtn = () => {
		const fullScreen = fullScreenRef.current;

		if (!document.fullscreenElement && fullScreen) {
			fullScreen.requestFullscreen();
			setFullScreenActive(true);
		} else {
			document.exitFullscreen();
			setFullScreenActive(false);
		}
	};

	useEffect(() => {
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
												onClick={() => showSlider(index)}
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
			<div
				ref={fullScreenRef}
				className="img-slider"
				style={slider ? { display: "flex" } : { display: "none" }}
			>
				<div className="img-slider-header">
					<button onClick={hideSlider} className="img-slider__close-btn">
						<img
							title="Close"
							src={closeIcon}
							width={25}
							height={25}
							alt="Close icon"
						/>
					</button>
				</div>
				<img
					className="img-slider__img"
					src={installationsData[imageIndex].img}
					alt=""
				/>
				<div className="img-slider__qty">
					{imageIndex + 1} | {installationsData.length}{" "}
				</div>
				<button
					onClick={() => handleSlider(-1)}
					className="img-slider__left-btn"
				>
					<img title="Previous" src={leftArrowIcon} width={25} height={25} />
				</button>
				<button
					onClick={() => handleSlider(1)}
					className="img-slider__right-btn"
				>
					<img title="Next" src={rightArrowIcon} width={25} height={25} />
				</button>
				<div className="img-slider-footer">
					<button
						onClick={toggleFullScreenBtn}
						className={`img-slider__expand-btn ${
							isTouchDevice() ? "img-slider__expand-btn--hide" : ""
						}`}
					>
						{fullScreenActive ? (
							<img
								title="Shrink"
								src={shrinkIcon}
								width={25}
								height={25}
								alt="Shrink"
							/>
						) : (
							<img
								title="Expand"
								src={expandIcon}
								width={25}
								height={25}
								alt="Expand"
							/>
						)}
					</button>
				</div>
			</div>
		</>
	);
};

export default OurInstallation;
