import Process from "../../components/Process/Process";
import Advantages from "../../components/Advantages/Advantages";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";
import { Helmet } from "react-helmet";
import "./Home.scss";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Fotovoltaika, která dává smysl | FVE STAVBY</title>
            </Helmet>
            <HomeTitle />
            <section className="home">
                <HomeAboutCompany />
                <Advantages />
                <Process />
                <Stats />
                <Partners />
                <GetInTouch />
            </section>
        </>
    );
};

export default Home;
