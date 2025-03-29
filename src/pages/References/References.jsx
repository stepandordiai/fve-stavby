import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/5.jpg";
import "./References.scss";

const References = () => {
    return (
        <>
            <Helmet>
                <title>References | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"References"} img={img} />
        </>
    );
};

export default References;
