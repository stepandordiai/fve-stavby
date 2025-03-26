import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/2.jpg";
import "./Company.scss";

const Company = () => {
    return (
        <>
            <Helmet>
                <title>Firemní instalace</title>
            </Helmet>
            <PageTitle title={"Firemní instalace"} img={img} />
        </>
    );
};

export default Company;
