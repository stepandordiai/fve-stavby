const handleCopy = (e, className) => {
	navigator.clipboard
		.writeText(e.target.innerText)
		.then(() => {
			const copyBanner = document.createElement("span");
			copyBanner.innerText = "Copied";

			// For multiple styles
			Object.assign(copyBanner.style, {
				position: "absolute",
				top: "0",
				right: "0",
				transform: "translateX(100%)",
				padding: "5px 7.5px",
				borderRadius: "15px",
				background: "var(--accent-clr)",
				color: "#000",
			});

			document.querySelector(className).append(copyBanner);

			setTimeout(() => {
				copyBanner.remove();
			}, 3000);
		})
		.catch((err) => console.error("Error copying text:", err));
};

export default handleCopy;
