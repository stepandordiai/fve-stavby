import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from "./../../assets/img/1.jpg";
import "./Products.scss";

const Products = () => {
    return (
        <>
            <Helmet>
                <title>Produkty | FVE STAVBY</title>
            </Helmet>
            <PageTitle title={"Produkty"} img={img} />
            <div className="product-card">
                <p className="product-title" id="invertors">
                    Invertors
                </p>
            </div>
            <div className="product-card">
                <p className="product-title" id="panels">
                    Panels
                </p>
            </div>
            <div className="product-card">
                <p className="product-title" id="optimizers">
                    Optimizers
                </p>
            </div>
            <div className="product-card">
                <p className="product-title" id="connectors">
                    Connectors
                </p>
            </div>
        </>
    );
};

export default Products;
