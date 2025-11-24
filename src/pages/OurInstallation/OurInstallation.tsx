import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Container from "../../components/Container/Container";
import img from "/img/08-c.jpg";
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

	const imgCardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const fullScreenRef = useRef<HTMLDivElement | null>(null);

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

	// TODO:
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

	// TODO: LEARN THIS
	useEffect(() => {
		const handleFullScreenOnChange = () => {
			if (document.fullscreenElement) {
				setFullScreenActive(true);
			} else {
				setFullScreenActive(false);
			}
		};

		document.addEventListener("fullscreenchange", handleFullScreenOnChange);

		return () =>
			document.removeEventListener(
				"fullscreenchange",
				handleFullScreenOnChange
			);
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							className="bi bi-x-lg"
							viewBox="0 0 16 16"
						>
							<title>Close</title>
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
						</svg>
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-chevron-left"
						viewBox="0 0 16 16"
					>
						<title>Previous</title>
						<path
							fillRule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
						/>
					</svg>
				</button>
				<button
					onClick={() => handleSlider(1)}
					className="img-slider__right-btn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-chevron-right"
						viewBox="0 0 16 16"
					>
						<title>Next</title>
						<path
							fillRule="evenodd"
							d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
						/>
					</svg>
				</button>
				<div className="img-slider-footer">
					<button
						onClick={toggleFullScreenBtn}
						className={`img-slider__expand-btn ${
							isTouchDevice() ? "img-slider__expand-btn--hide" : ""
						}`}
					>
						{fullScreenActive ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-fullscreen-exit"
								viewBox="0 0 16 16"
							>
								<title>Exit full screen</title>
								<path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-fullscreen"
								viewBox="0 0 16 16"
							>
								<title>Full screen</title>
								<path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
							</svg>
						)}
					</button>
				</div>
			</div>
		</>
	);
};

export default OurInstallation;
