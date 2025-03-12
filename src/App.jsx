import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import "./App.scss";
import Home from "./pages/Home/Home";
import Building from "./components/Building/Building";

function App() {
    return (
        <>
            <Building />
            <Header />
            <Menu />
            <Home />
        </>
    );
}

export default App;
