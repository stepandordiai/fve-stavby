import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./NotFound.scss";

const NotFound = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>404</title>
			</Helmet>
			<main>
				<PageTitle
					title="404 - Page Not Found"
					className="bg-404"
					linkPath="/"
					linkName={t("home_title")}
				/>
			</main>
		</>
	);
};

export default NotFound;
