"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ScrollToTop() {
	const pathname = usePathname();

	useLayoutEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [pathname]);

	return null;
}
