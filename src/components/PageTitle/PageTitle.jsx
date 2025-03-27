import "./PageTitle.scss";

const PageTitle = ({ title, img }) => {
    return (
        <>
            <div className="page-title">
                <h1 className="page-title__title">{title}</h1>
                <img
                    className="page-title__img"
                    src={img}
                    alt=""
                    loading="lazy"
                />
            </div>
        </>
    );
};

export default PageTitle;
