import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import "./Process.scss";

const Process = () => {
	const { t } = useTranslation();

	const processData = [
		{ id: 1, title: t("process.option1"), desc: t("process.desc1") },
		{ id: 2, title: t("process.option2"), desc: t("process.desc2") },
		{ id: 3, title: t("process.option3"), desc: t("process.desc3") },
		{
			id: 4,
			title: t("process.option4"),
			desc: t("process.desc4"),
			price: t("process.free"),
		},
		{ id: 5, title: t("process.option5"), desc: t("process.desc5") },
		{ id: 6, title: t("process.option6"), desc: t("process.desc6") },
		{ id: 7, title: t("process.option7"), desc: t("process.desc7") },
		{ id: 8, title: t("process.option8"), desc: t("process.desc8") },
	];

	const processRefs = useRef<(HTMLDivElement | null)[]>([]);

	const [processInView, setProcessInView] = useState(
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
		// TODO:
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
												className={
													index + 1 === process.id
														? `step ${
																processInView[index] ? "step--active" : ""
														  }`
														: ""
												}
												data-step-value={
													index + 1 === process.id ? process.id : undefined
												}
											></span>
										);
									})}
							</div>
							<p className="process-card__title">{process.title}</p>
							<p className="process-card__details">{process.desc}.</p>
							{process.price && (
								<div className="process-card__price">{process.price}</div>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Process;
