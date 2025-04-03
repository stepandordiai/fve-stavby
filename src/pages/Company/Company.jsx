import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/2.jpg";
import "./Company.scss";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Company = () => {
    return (
        <>
            <Helmet>
                <title>Firemní instalace | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"Firemní instalace"} img={img} />
            <GetInTouch />
        </>
    );
};

export default Company;
