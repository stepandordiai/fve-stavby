import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/4.png";
import "./House.scss";

const House = () => {
    return (
        <>
            <Helmet>
                <title>Fotovoltaika pro rodinné domy</title>
            </Helmet>
            <PageTitle title={"Fotovoltaika pro rodinné domy"} img={img} />
        </>
    );
};

export default House;
