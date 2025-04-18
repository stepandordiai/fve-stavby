import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import WhySolar from "../../components/WhySolar/WhySolar";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import img from "/assets/img/3.jpg";
import "./House.scss";

const House = () => {
    return (
        <>
            <Helmet>
                <title>Fotovoltaika pro rodinné domy | FVE STAVBY</title>
                <link rel="canonical" href="https://fvestavby.cz/house" />
            </Helmet>
            <PageTitle title={"Fotovoltaika pro rodinné domy"} img={img} />
            <WhySolar />
            <GetInTouch />
        </>
    );
};

export default House;
