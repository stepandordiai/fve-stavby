import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/7.jpg";
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>O nás</title>
            </Helmet>
            <PageTitle title={"O nás"} img={img} />
        </>
    );
};

export default AboutUs;
