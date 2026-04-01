"use client";

import { useEffect } from "react";
import isTouchDevice from "@/utils/isTouchDevice";

interface Guarantee {
	years: number;
	desc: string;
}

const guaranteesData: Guarantee[] = [
	{ years: 12, desc: "let na Střídač" },
	{ years: 15, desc: "let na Fotovoltaické panely" },
	{ years: 25, desc: "let Záruka na výkon panelů" },
	{ years: 5, desc: "let na Montáž" },
	{ years: 10, desc: "let na Montážní systém" },
	{ years: 2, desc: "roky na Kabeláž" },
	{ years: 2, desc: "roky na Zabezpečení AC/DC" },
	{ years: 6000, desc: "cyklů na baterie" },
];

export default function AboutUsClient() {
	// FIXME:
	useEffect(() => {
		const portfolio = document.querySelectorAll(".guarantees__grid-item");

		portfolio.forEach((creatorLink) => {
			const bgElement = document.createElement("div");

			creatorLink.appendChild(bgElement);

			bgElement.classList.add("bg-element");

			let mouseX;
			let mouseY;

			creatorLink.addEventListener("mousemove", (e) => {
				const rect = creatorLink.getBoundingClientRect();
				mouseX =
					(!isTouchDevice()
						? (e as MouseEvent).clientX
						: (e as TouchEvent).touches[0].clientX) - rect.left;
				mouseY =
					(!isTouchDevice()
						? (e as MouseEvent).clientY
						: (e as TouchEvent).touches[0].clientY) - rect.top;
				bgElement.style.top = mouseY + "px";
				bgElement.style.left = mouseX + "px";
				bgElement.classList.add("bg-element--active");
			});

			creatorLink.addEventListener("touchmove", (e) => {
				const rect = creatorLink.getBoundingClientRect();
				mouseX =
					(!isTouchDevice()
						? (e as MouseEvent).clientX
						: (e as TouchEvent).touches[0].clientX) - rect.left;
				mouseY =
					(!isTouchDevice()
						? (e as MouseEvent).clientY
						: (e as TouchEvent).touches[0].clientY) - rect.top;
				bgElement.style.top = mouseY + "px";
				bgElement.style.left = mouseX + "px";
				bgElement.classList.add("bg-element--active");
			});

			creatorLink.addEventListener("mouseleave", () => {
				bgElement.classList.remove("bg-element--active");
			});

			creatorLink.addEventListener("touchend", () => {
				bgElement.classList.remove("bg-element--active");
			});
		});
	}, []);

	return (
		<div className="guarantees__grid">
			{guaranteesData.map((guarantee, i) => {
				return (
					<div key={i} className="guarantees__grid-item">
						<span>{guarantee.years}</span>
						<span>{guarantee.desc}</span>
					</div>
				);
			})}
		</div>
	);
}
