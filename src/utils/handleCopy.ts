const handleCopy = (e: any, className: string, copiedTxt: string) => {
	navigator.clipboard
		.writeText(e.target.innerText)
		.then(() => {
			const copyBanner = document.createElement("span");
			copyBanner.innerText = copiedTxt;

			Object.assign(copyBanner.style, {
				position: "absolute",
				top: "0",
				right: "0",
				transform: "translateX(100%)",
				padding: "5px 7.5px",
				borderRadius: "15px",
				background: "var(--accent-clr)",
				color: "#000",
				pointerEvents: "none",
			});

			const element = document.querySelector(className) as HTMLElement | null;

			element?.append(copyBanner);

			setTimeout(() => {
				copyBanner.remove();
			}, 3000);
		})
		.catch((err) => console.error("Error copying text:", err));
};

export default handleCopy;
