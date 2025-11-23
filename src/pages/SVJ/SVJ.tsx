import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect, useRef } from "react";
import Container from "../../components/Container/Container";
import video from "/video.mp4";
import "./SVJ.scss";

const SVJ = () => {
	const { t } = useTranslation();

	const linkRef = useRef<HTMLAnchorElement | null>(null);
	const linkIconRef = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		const link = linkRef.current;
		const linkIcon = linkIconRef.current;

		const handleLinkOnMouseMove = (e: MouseEvent) => {
			if (!link) return;
			const linkRect = link.getBoundingClientRect();

			let mouseX = e.clientX - linkRect.left;
			let mouseY = e.clientY - linkRect.top;

			const offset = 25;

			mouseX = Math.max(offset, Math.min(mouseX, linkRect.width - offset));
			mouseY = Math.max(offset, Math.min(mouseY, linkRect.height - offset));

			if (!linkIcon) return;

			linkIcon.style.left = mouseX + "px";
			linkIcon.style.top = mouseY + "px";
		};

		const handleLinkOnMouseLeave = () => {
			if (!linkIcon) return;

			linkIcon.style.left = 50 + "%";
			linkIcon.style.top = 50 + "%";
		};

		link?.addEventListener("mousemove", handleLinkOnMouseMove);
		link?.addEventListener("mouseleave", handleLinkOnMouseLeave);

		return () => {
			link?.removeEventListener("mousemove", handleLinkOnMouseMove);
			link?.removeEventListener("mouseleave", handleLinkOnMouseLeave);
		};
	}, []);

	return (
		<>
			<Helmet>
				<meta name="description" content={t("svj_seo_desc")} />
				<title>SVJ | FVE STAVBY</title>
				<link rel="canonical" href="https://www.fvestavby.cz/svj" />
			</Helmet>
			<main className="svj">
				<Container>
					<PageTitle title={t("svj_title")} className="bg-max-flow" />
					<div className="svj__inner">
						<h2 className="svj__title">{t("svj_sec_title")}</h2>
						<a
							ref={linkRef}
							className="svj__link"
							href="https://maxflow.netlify.app/"
							target="_blank"
						>
							<video className="svj__video" muted loop playsInline autoPlay>
								<source src={video} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<span ref={linkIconRef} className="svj__link-icon-container">
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 17L17 7M17 7H8M17 7V16"
										stroke="currentColor"
										strokeWidth="1"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</a>
					</div>
				</Container>
			</main>
		</>
	);
};

export default SVJ;
