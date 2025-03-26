import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/4.png";
import "./House.scss";

const House = () => {
    return (
        <>
            <Helmet>
                <title>Dům</title>
            </Helmet>
            <PageTitle title={"Dům"} img={img} />
        </>
    );
};

export default House;
