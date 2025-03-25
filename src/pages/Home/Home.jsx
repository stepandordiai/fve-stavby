import logo from "./../../assets/logo/fvestavby-cz.png";
import logo1 from "./../../assets/logo/fvestavby-cz-1.png";
import logo3 from "./../../assets/logo/solar-panel.png";
import logo4 from "./../../assets/logo/solar.png";
import Process from "../../components/Process/Process";
import Advantages from "../../components/Advantages/Advantages";
import Partners from "../../components/Partners/Partners";
import Stats from "../../components/Stats/Stats";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import "./Home.scss";
import HomeAboutCompany from "../../components/HomeAboutCompany/HomeAboutCompany";

const Home = () => {
    return (
        <>
            <HomeTitle />
            <section className="home">
                <HomeAboutCompany />
                <Process />
                <Advantages />
                <Partners />
                <Stats />
            </section>
        </>
    );
};

export default Home;
