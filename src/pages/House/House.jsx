import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/9.jpg";
import "./House.scss";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const House = () => {
    return (
        <>
            <Helmet>
                <title>Fotovoltaika pro rodinné domy | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"Fotovoltaika pro rodinné domy"} img={img} />
            <GetInTouch />
        </>
    );
};

export default House;
