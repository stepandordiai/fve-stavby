import Process from "../../components/Process/Process";
import WhyUs from "../../components/WhyUs/WhyUs";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";
import { Helmet } from "react-helmet";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Fotovoltaika, která dává smysl | FVE STAVBY</title>
                <link rel="canonical" href="https://fvestavby.cz/" />
            </Helmet>
            <HomeTitle />
            <section className="home">
                <HomeAboutCompany />
                <WhyUs />
                <Process />
                <Stats />
                <Partners />
                <GetInTouch />
            </section>
        </>
    );
};

export default Home;
