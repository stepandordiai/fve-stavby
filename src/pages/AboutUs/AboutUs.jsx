import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/assets/img/7.jpg";
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>O nás | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"O nás"} img={img} />
            <GetInTouch />
        </>
    );
};

export default AboutUs;
