import Process from "../../components/Process/Process";
import Advantages from "../../components/Advantages/Advantages";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";
import { Helmet } from "react-helmet";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Fotovoltaika, která dává smysl | FVE STAVBY</title>
            </Helmet>
            <HomeTitle />
            <section className="home">
                <HomeAboutCompany />
                <Process />
                <Advantages />
                <Stats />
                <Partners />
            </section>
        </>
    );
};

export default Home;
