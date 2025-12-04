import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import "./Process.scss";

const processData = [
	{ id: 1, title: "process.option1", desc: "process.desc1" },
	{ id: 2, title: "process.option2", desc: "process.desc2" },
	{ id: 3, title: "process.option3", desc: "process.desc3" },
	{
		id: 4,
		title: "process.option4",
		desc: "process.desc4",
		price: "process.free",
	},
	{ id: 5, title: "process.option5", desc: "process.desc5" },
	{ id: 6, title: "process.option6", desc: "process.desc6" },
	{ id: 7, title: "process.option7", desc: "process.desc7" },
	{ id: 8, title: "process.option8", desc: "process.desc8" },
];

const Process = () => {
	const { t } = useTranslation();

	const processRefs = useRef<(HTMLDivElement | null)[]>([]);

	const [processInView, setProcessInView] = useState<boolean[]>(
		new Array(processData.length).fill(false)
	);

	const handleProcessInView = (index: number) => {
		setProcessInView((prev) => {
			// TODO:
			if (prev[index]) return prev;
			const updated = [...prev];
			updated[index] = true;
			return updated;
		});
	};

	useEffect(() => {
		if (!processRefs.current.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const entryIndex = processRefs.current.indexOf(
						entry.target as HTMLDivElement
					);
					if (entryIndex !== -1 && entry.isIntersecting) {
						handleProcessInView(entryIndex);
					}
				});
			},
			{ threshold: 1 }
		);

		processRefs.current.forEach((process) => {
			if (process) observer.observe(process);
		});

		// TODO:
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<h2 className="process__title">{t("process.title")}</h2>
			<div className="process-grid">
				{processData.map((process, index) => {
					return (
						<div
							// TODO:
							ref={(el) => {
								processRefs.current[index] = el;
							}}
							key={process.id}
							className="process-card"
						>
							<div className="process-card__step">
								{/* TODO: */}
								{new Array(processData.length)
									.fill(undefined)
									.map((_, index) => {
										return (
											<span
												key={index}
												className={classNames("step", {
													"step--active":
														processInView[index] && index + 1 === process.id,
												})}
												data-step-value={
													index + 1 === process.id ? process.id : undefined
												}
											></span>
										);
									})}
							</div>
							<p className="process-card__title">{t(process.title)}</p>
							<p className="process-card__details">{t(process.desc)}.</p>
							{process.price && (
								<div className="process-card__price">{t(process.price)}</div>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Process;
