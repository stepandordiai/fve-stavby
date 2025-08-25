import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import arrowIcon from "/icons/arrow-upper-right-white.png";
import { useEffect } from "react";
import Container from "../../components/Container/Container";
import "./SVJ.scss";

const SVJ = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const linkIcon = document.querySelector(
			".svj__link-icon-container"
		) as HTMLDivElement | null;
		const link = document.querySelector(
			".svj__link"
		) as HTMLAnchorElement | null;

		// TODO:
		link?.addEventListener("mousemove", (e) => {
			const linkRect = link.getBoundingClientRect();

			let mouseX = (e as MouseEvent).clientX - linkRect.left;
			let mouseY = (e as MouseEvent).clientY - linkRect.top;

			const offset = 25;

			mouseX = Math.max(offset, Math.min(mouseX, linkRect.width - offset));
			mouseY = Math.max(offset, Math.min(mouseY, linkRect.height - offset));

			if (!linkIcon) return;

			linkIcon.style.left = mouseX + "px";
			linkIcon.style.top = mouseY + "px";
		});

		link?.addEventListener("mouseleave", (e) => {
			if (!linkIcon) return;

			linkIcon.style.left = 50 + "%";
			linkIcon.style.top = 50 + "%";
		});
	});

	return (
		<>
			<Helmet>
				{/* TODO: */}
				{/* <meta name="description" content="" /> */}
				<title>SVJ | FVE STAVBY</title>
				<link rel="canonical" href="https://fvestavby.cz/svj" />
			</Helmet>
			<main className="svj">
				<Container>
					<PageTitle title={t("svj_title")} className="bg-max-flow" />
					<div className="svj__inner">
						<h2 className="svj__title">{t("svj_sec_title")}</h2>
						<a
							className="svj__link"
							href="https://maxflow.netlify.app/"
							target="_blank"
						>
							<span className="svj__link-icon-container">
								<img
									className="svj__link-icon"
									width={25}
									height={25}
									src={arrowIcon}
									alt=""
								/>
							</span>
						</a>
					</div>
				</Container>
			</main>
		</>
	);
};

export default SVJ;
