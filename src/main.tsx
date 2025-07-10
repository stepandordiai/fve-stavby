// import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import App from "./App.js";

createRoot(document.getElementById("root") as HTMLElement).render(
	// <StrictMode>
	<HelmetProvider>
		<App />
	</HelmetProvider>
	// </StrictMode>
);
